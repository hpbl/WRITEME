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

class TypeSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headingLevel: 2,
    };
  }

  render() {
    const { sectionCode, sections } = this.props;
    const { headingLevel } = this.state;

    const groupedSections = groupSectionsByHeadingLevel(sections);
    const desiredLevelSections = groupedSections[headingLevel];
    const sortedOccurences = sortByOccurence(desiredLevelSections);

    const popularOccurences = sortedOccurences.filter(section => section[1] > 1);

    return (
      <div className="TypeSectionContainer">
        <code>
          type:
          {' '}
          {sectionTypes[sectionCode]}
        </code>
        {
          sectionsToParagraph(popularOccurences, headingLevel)
        }
      </div>
    );
  }
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
