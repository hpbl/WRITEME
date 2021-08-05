import configparser
import logging
import pandas
from pandas import DataFrame
import numpy as np
import sqlite3
from sqlite3 import Error
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.svm import LinearSVC
from sklearn.preprocessing import MultiLabelBinarizer
from sklearn.model_selection import cross_val_predict
from sklearn.metrics import classification_report
from sklearn.model_selection import cross_val_score
from containerizedModel.script.helper.heuristic2 import *
from containerizedModel.script.helper.balancer import *
import time
import operator
from sklearn.externals import joblib
import sys

def find_unique(csv_input_line):
    l = list(set(csv_input_line.split(',')))
    l.sort()
    return l

def classify_sections(language=''):
    start = time.time()
    
    config = configparser.ConfigParser()
    config.read('containerizedModel/config/config.cfg')
    db_filename = config['DEFAULT']['db_filename']
    rng_seed = int(config['DEFAULT']['rng_seed'])
    vectorizer = joblib.load(config['DEFAULT']['vectorizer_filename']) 
    binarizer = joblib.load(config['DEFAULT']['binarizer_filename']) 
    classifier = joblib.load(config['DEFAULT']['model_filename'])
    output_section_code_filename = config['DEFAULT']['output_section_code_filename'].replace(".csv", f'_{language}.csv')
    output_file_codes_filename = config['DEFAULT']['output_file_codes_filename'].replace(".csv", f'_{language}.csv')
    
    log_filename = 'containerizedModel/log/classifier_classify_target.log'    
    logging.basicConfig(handlers=[logging.FileHandler(log_filename, 'w+', 'utf-8')], level=20)
    logging.getLogger().addHandler(logging.StreamHandler())
    
    conn = sqlite3.connect(db_filename)
    try:
        sql_text = """
        SELECT t1.file_id, t1.section_id, t1.url, t1.local_readme_file, t1.heading_markdown, t1.abstracted_heading_markdown,
        t1.heading_text, t1.abstracted_heading_text, t1.heading_level, t2.content_text_w_o_tags, 
        t1.abstracted_heading_text || ' ' || t2.content_text_w_o_tags AS abstracted_heading_plus_content
        FROM target_section_overview t1 
        JOIN target_section_content t2 
        ON t1.file_id=t2.file_id AND t1.section_id=t2.section_id
        ORDER BY t1.file_id, t1.section_id
        """
        df = pandas.read_sql_query(con=conn, sql=sql_text)
        
        heading_plus_content_corpus = df['abstracted_heading_plus_content']
        content_corpus = df['content_text_w_o_tags']
        heading_text_corpus = df['heading_text']
        url_corpus = df['url']
        
        tfidfX = vectorizer.transform(heading_plus_content_corpus)
        
        logging.info('tfidf matrix shape: ')  
        logging.info(tfidfX.shape)
        
        # Derive features from heading text and content
        logging.info('Deriving features')
        derived_features = derive_features_using_heuristics(url_corpus, heading_text_corpus, content_corpus)
                
        logging.debug('Derived features shape:')
        logging.debug(derived_features.shape)
                
        features_tfidf = pandas.DataFrame(tfidfX.todense())
        features_tfidf.columns = vectorizer.get_feature_names()
        features_combined = pandas.concat([features_tfidf, derived_features], axis=1)
        
        logging.debug('Combined features shape:')
        logging.debug(features_combined.shape)

        labels_matrix = classifier.predict(features_combined.values)
        df['section_code'] = [','.join(x) for x in binarizer.inverse_transform(labels_matrix)]
        # Update DB table
        df = df.loc[:,['file_id', 'section_id', 'url', 'local_readme_file', 'heading_markdown', 'abstracted_heading_markdown','heading_text', 'abstracted_heading_text',
                       'heading_level','section_code']]
        df.to_sql(name='target_section_overview', con=conn, if_exists='replace', index=False)
        # Export result to file
        output = df.loc[:,['file_id','section_id','local_readme_file','heading_markdown','section_code']]
        output.to_csv(output_section_code_filename, sep=',', index=False)
        # Find missing section codes
        output_file_completeness = df.loc[:,['local_readme_file','section_code']]
        output_file_completeness = output_file_completeness.groupby('local_readme_file', sort=False)['section_code'].apply(lambda x: ','.join(x)).reset_index(name='section_codes_in_file')
        # Remove duplicates (i.e. change '1,1,2,2,3,3' into '1,2,3')
        output_file_completeness['section_codes_in_file'] = output_file_completeness['section_codes_in_file'].apply(lambda x: ','.join(find_unique(x)))
        # Find codes that aren't yet in the README. Omit '-' because we don't need 'Exclusion' sections.
        output_file_completeness['codes_not_in_file'] = output_file_completeness['section_codes_in_file'].apply(lambda x: ','.join(sorted(list(set(['1','3','4','5','6','7','8']) - set(x.split(','))))))
        output_file_completeness.to_csv(output_file_codes_filename, sep=',', index=False)
        end = time.time()
        runtime_in_seconds = end - start
        logging.info('Processing completed in {0}'.format(runtime_in_seconds))
        print('Processing completed in {0}'.format(runtime_in_seconds), file=sys.stderr)
    except Error as e:
        logging.exception(e)
        print(e, file=sys.stderr)
    except Exception as e:
        logging.exception(e)
        print(e, file=sys.stderr)
    finally:
        conn.close()


if __name__ == '__main__':
    classify_sections()
