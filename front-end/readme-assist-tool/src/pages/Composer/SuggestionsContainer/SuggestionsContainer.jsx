import React from 'react';
import PropTypes from 'prop-types';
import './SuggestionsContainer.css';

import TypeSectionContainer from './TypeSectionContainer/TypeSectionContainer';
import { sectionCodes } from '../../../common/SectionTypes';
import sections from '../../../common/swift_sections';
import { groupSectionsByFirstSectionCode } from '../../../common/SectionParser';

function SuggestionsContainer({ onSectionToggle }) {
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
};


export default SuggestionsContainer;
