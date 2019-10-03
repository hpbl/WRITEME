import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SuggestionsContainer.css';

import TypeSectionContainer from './TypeSectionContainer/TypeSectionContainer';
import { sectionCodes } from '../../../common/SectionTypes';
import { getSections } from '../../../common/Languages';
import { groupSectionsByFirstSectionCode } from '../../../common/SectionParser';

function SuggestionsContainer({ onSectionToggle, language }) {
  const sections = getSections(language);
  const groupedSections = groupSectionsByFirstSectionCode(sections);
  const containerRef = useRef();

  useEffect(() => {
    if (language) {
      containerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [language]);

  return (
    <div className="SuggestionsContainer" ref={containerRef}>
      <div className="LanguageContainer">{language}</div>
      <div className="TopSection">
        <h1># Project Name</h1>
        <p>&gt; tagline</p>
        <p>![header](image)</p>
      </div>
      {
        sectionCodes.map(code => (
          <TypeSectionContainer
            language={language}
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
