import React from 'react';
import PropTypes from 'prop-types';
import './Composer.css';
import ReactGA from 'react-ga';
import About from '../About/About';
import SuggestionsContainer from './SuggestionsContainer/SuggestionsContainer';
import READMEContainer from './READMEContainer/READMEContainer';
import isEqual from '../../common/Extensions';
import { numReposForLanguage } from '../../common/ReadmeParser';

class Composer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSections: [],
    };

    const { match: { params: { language } } } = props;
    ReactGA.pageview(`composer/${language}`);
  }

  sectionIndex(section) {
    const { selectedSections } = this.state;
    return selectedSections.findIndex(selectedSection => isEqual(section, selectedSection));
  }

  toggleSection(toggledSection) {
    const { selectedSections } = this.state;
    const sectionIndex = this.sectionIndex(toggledSection);

    if (sectionIndex === -1) {
      selectedSections.push(toggledSection);
    } else {
      selectedSections.splice(sectionIndex, 1);
    }

    this.setState({
      selectedSections,
    });
  }

  render() {
    const { selectedSections } = this.state;
    const { match: { params: { language } } } = this.props;
    const numRepos = numReposForLanguage(language);

    return (
      <div>
        <About numRepos={`${numRepos}`} />
        <div className="Composer">
          <SuggestionsContainer
            language={language}
            onSectionToggle={section => this.toggleSection(section)}
          />
          <READMEContainer selectedSections={selectedSections} />
        </div>
      </div>
    );
  }
}

Composer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      language: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Composer;
