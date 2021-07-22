/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import { getLanguages, githubLaguages } from '../../common/Languages';
import './About.css';


const languagesOptions = githubLaguages.map(lang => ({ value: lang, label: lang }));

const About = ({ numRepos }) => (
  <div className="About">
    <div id="titleSection">
      <h1>Data Driven README</h1>
      <p>
        Software is meant to be used, and the first step towards making your project usable is having a good README. If you&apos;re here that probably means you already know that, but what you might not know is what should be included in your README?
      </p>
      <p>
        There are several opinionated guides about how to write a README. However, with an ever-growing number of programming languages, tools, and processes, the idea of having one definitive generic guide is bound to become outdated, as it does not take into consideration the specific details and nuances of projects built on different languages, for different systems.
      </p>
      <p>
        This tool will not write a README for you, but it will give you suggestions of what content should be included in your document, according to which programming language you&apos;re using. All suggestions are derived from live data from the most popular GitHub repositories and scientific research.
      </p>
    </div>

    <div id="contentSection">
      <h1>What should be in your README?</h1>
      <p>
        A study conducted in 2018
        <sup>
          <a
            href="https://doi.org/10.1007/s10664-018-9660-3"
            rel="noopener noreferrer"
            target="_blank"
          >
            [1]
          </a>
        </sup>
        &nbsp;answered this question by querying GitHub repos and analyzing the content of each section from their READMEs. They found that the content of those sections can be classified in the following categories:
      </p>
      <ol>
        <li>
          <strong>WHAT: </strong>
          An introduction on what your project does.
        </li>
        <li>
          <strong>WHY:</strong>
          The motivation behind your project, it&apos;s advantages.
        </li>
        <li>
          <strong>HOW: </strong>
          Instructions on how to use the project.
        </li>
        <li>
          <strong>WHEN</strong>
          The status of the project, it&apos;s versions and roadmap.
        </li>
        <li>
          <strong>WHO: </strong>
          The people responsible for the project, license information, code of conduct.
        </li>
        <li>
          <strong>REFERENCES: </strong>
          External documentation, support, and related projects.
        </li>
        <li>
          <strong>CONTRIBUTION: </strong>
          Instructions on how to contribute to the project (sometimes a stand-alone file).
        </li>
        <li>
          <strong>OTHER: </strong>
          Any type of content that does not fit any of the above categories.
        </li>
      </ol>
      <p>
        Using a classifier designed by the researchers
        <sup>
          <a
            href="https://github.com/gprana/READMEClassifier/"
            rel="noopener noreferrer"
            target="_blank"
          >
            [2]
          </a>
        </sup>
        &nbsp;we classify the sections of READMEs from the&nbsp;
        {numRepos}
        &nbsp;most starred repositories written in the programming language of your choice, so they can be grouped according to its content and heading level, and passed as suggestions so you can select the ones that apply to your project, knowing how often they are used by others.
      </p>
    </div>

    { numRepos === '' && (
      <div id="links">
        <h1>Supported languages</h1>
        <p>This tool is meant to work with every programming language that has projects on GitHub. Choose any language below and you'll be redirected to compose a new README file based on selected language. </p>
        <p><small><b>If you can't find some language, open a new issue on our Github repository</b></small></p>
        <Select
          options={languagesOptions}
          onChange={(o) => {
            window.location = `composer/${o.value}`;
          }}
        />
        <ul>
          {
            getLanguages().map(({ urlName, presentationName }) => (
              <li key={urlName}>
                <Link key={urlName} to={`composer/${urlName}`}>{presentationName}</Link>
              </li>
            ))
          }
        </ul>
      </div>
    )}
  </div>
);

About.propTypes = {
  numRepos: PropTypes.string,
};

About.defaultProps = {
  numRepos: '',
};

export default About;
