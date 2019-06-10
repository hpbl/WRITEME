import React from 'react';
import PropTypes from 'prop-types';
import './TypeSectionContainer.css';
import { sectionTypes } from '../../../../common/SectionTypes';
import { groupSectionsByHeadingLevel, sortByOccurence } from '../../../../common/SectionParser';


function sectionsToParagraph(sections, headingLevel) {
  return sections.map((section) => {
    const heading = '#'.repeat(headingLevel);
    return (
      <p key={`${section.file_id}-${section.section_id}`}>
        {`${heading} ${section[0]} (${section[1]})`}
      </p>
    );
  });
}

function TypeSectionContainer(props) {
  const { sectionCode, sections } = props;

  const groupedSections = groupSectionsByHeadingLevel(sections);
  const sortedOccurences = Object.keys(groupedSections).map(headingLevel => (
    sortByOccurence(groupedSections[headingLevel])
  ));
  const popularOccurences = sortedOccurences.map(sortedSections => (
    sortedSections.filter(section => section[1] > 1)
  ));

  return (
    <div className="TypeSectionContainer">
      <code>
        type:
        {' '}
        {sectionTypes[sectionCode]}
      </code>
      {
        popularOccurences.map((sortedSections, index) => {
          const headingLevel = index + 1;
          return sectionsToParagraph(sortedSections, headingLevel);
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
