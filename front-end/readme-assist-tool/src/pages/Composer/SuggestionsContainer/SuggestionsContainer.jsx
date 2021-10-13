import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import './SuggestionsContainer.css';

import TypeSectionContainer from './TypeSectionContainer/TypeSectionContainer';
import { sectionCodes } from '../../../common/SectionTypes';
import { groupSectionsByFirstSectionCode } from '../../../common/SectionParser';

function SuggestionsContainer(props) {
  const {
    onSectionToggle, language, sections, trees,
  } = props;
  const [typeSections, setTypeSections] = useState([])

  useEffect(() => {
    const groupedSections = groupSectionsByFirstSectionCode(sections);
    setTypeSections(sectionCodes.map(code => (
        <TypeSectionContainer
            language={language}
            trees={trees}
            sectionCode={code}
            key={code}
            sections={groupedSections[code]}
            onSectionToggle={onSectionToggle}
        />
    )))
  }, [language, trees, sections])

  return (
    <div className="SuggestionsContainer">
      <div className="TopSection">
        <h1># Project Name</h1>
        <p>&gt; tagline</p>
        <p>![header](image)
          {Object.keys(sections)?.length}</p>
      </div>
      {
        typeSections
      }
    </div>
  );
}

SuggestionsContainer.propTypes = {
  onSectionToggle: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};


export default SuggestionsContainer;
