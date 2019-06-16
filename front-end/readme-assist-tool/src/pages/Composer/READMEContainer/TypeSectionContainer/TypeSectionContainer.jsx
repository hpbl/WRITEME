import React from 'react';
import PropTypes from 'prop-types';
import './TypeSectionContainer.css';
import { sectionTypes } from '../../../../common/SectionTypes';
import { groupSectionsByHeadingLevel, sortByOccurence } from '../../../../common/SectionParser';
import isEqual from '../../../../common/Extensions';


class TypeSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headingLevel: 2,
      selectedSections: [],
    };
  }

  sectionIndex(section) {
    const { selectedSections } = this.state;
    return selectedSections.findIndex(selectedSection => isEqual(section, selectedSection));
  }

  toggleSection(toggledSection) {
    const { selectedSections } = this.state;
    const sectionIndex = this.sectionIndex(toggledSection);

    if (sectionIndex === -1) {
      console.log('adicionou');
      selectedSections.push(toggledSection);
    } else {
      selectedSections.splice(sectionIndex, 1);
    }

    this.setState({
      selectedSections,
    });
  }

  sectionsToParagraph(sections, headingLevel) {
    return sections.map((section) => {
      const newSection = { sectionTitle: section[0], headingLevel };
      const isSelected = this.sectionIndex(newSection) !== -1;

      const heading = '#'.repeat(headingLevel);

      return (
        <h2 key={`${section[0]}-${section[1]}`} className={isSelected ? 'selected' : 'unselected'}>
          <button onClick={() => this.toggleSection(newSection)} type="button">
            {`${heading} ${newSection.sectionTitle} (${section[1]})`}
          </button>
        </h2>
      );
    });
  }


  render() {
    const { sectionCode, sections } = this.props;
    const { headingLevel, selectedSections } = this.state;
    console.log(selectedSections);

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
          this.sectionsToParagraph(popularOccurences, headingLevel)
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
