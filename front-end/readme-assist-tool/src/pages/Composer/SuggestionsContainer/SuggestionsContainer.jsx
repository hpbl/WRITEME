import React from 'react';
import PropTypes from 'prop-types';
import './SuggestionsContainer.css';

import TypeSectionContainer from './TypeSectionContainer/TypeSectionContainer';
import { sectionCodes } from '../../../common/SectionTypes';
import { getSections } from '../../../common/Languages';
import { groupSectionsByFirstSectionCode } from '../../../common/SectionParser';

function SuggestionsContainer(props) {
  const {
    onSectionToggle, language, sections, trees,
  } = props;
  const groupedSections = groupSectionsByFirstSectionCode(sections);

  return (
    <div className="SuggestionsContainer">
      <div className="TopSection">
        <h1># Project Name</h1>
        <p>&gt; tagline</p>
        <p>![header](image)</p>
      </div>
      {
        sectionCodes.map(code => (
          <TypeSectionContainer
            language={language}
            trees={trees}
            sectionCode={code}
            key={code}
            sections={groupedSections[code]}
            onSectionToggle={onSectionToggle}
          />
        ))
      }
    </div>
  );
}

SuggestionsContainer.propTypes = {
  onSectionToggle: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};


export default SuggestionsContainer;
