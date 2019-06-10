import React from 'react';
import PropTypes from 'prop-types';
import './TypeSectionContainer.css';
import { sectionTypes } from '../../../../common/SectionTypes';
import { groupSectionsByKey } from '../../../../common/SectionParser';


function sectionsToParagraph(sections, level) {
  return sections.map((section) => {
    const heading = '#'.repeat(level);
    return (
      <p key={`${section.file_id}-${section.section_id}`}>
        {`${heading} ${section.title}`}
      </p>
    );
  });
}

function TypeSectionContainer(props) {
  const { sectionCode, sections } = props;

  const groupedSections = groupSectionsByKey('heading_level', sections);

  return (
    <div className="TypeSectionContainer">
      <code>
        type:
        {' '}
        {sectionTypes[sectionCode]}
      </code>
      {
        Object.keys(groupedSections).map((level) => {
          const levelSections = groupedSections[level];
          return sectionsToParagraph(levelSections, level);
        })
      }
    </div>
  );
}

TypeSectionContainer.propTypes = {
  sectionCode: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      file_id: PropTypes.string.isRequired,
      section_id: PropTypes.string.isRequired,
    }),
  ),
};

TypeSectionContainer.defaultProps = {
  sections: [],
};

export default TypeSectionContainer;
