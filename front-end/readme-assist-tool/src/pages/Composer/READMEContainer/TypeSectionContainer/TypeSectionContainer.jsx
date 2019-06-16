import React from 'react';
import PropTypes from 'prop-types';
import './TypeSectionContainer.css';
import { sectionTypes } from '../../../../common/SectionTypes';
import { groupSectionsByHeadingLevel, sortByOccurence } from '../../../../common/SectionParser';
import { findChildren } from '../../../../common/ReadmeParser';
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

      return (
        <div className="section" key={`${newSection.sectionTitle}-${section[1]}`}>
          {this.renderSection(newSection, section[1])}
          {isSelected
            && (
            <div className="children">
              {
                findChildren(newSection.sectionTitle, newSection.headingLevel)
                  .flat(Infinity)
                  .map((child) => {
                    const childSection = { sectionTitle: child.name, headingLevel: child.level };
                    return this.renderSection(childSection, 1);
                  })
              }
            </div>
            )
          }
        </div>
      );
    });
  }

  renderSection(section, occurence) {
    const isSelected = this.sectionIndex(section) !== -1;

    const className = isSelected ? 'selected' : 'unselected';
    const heading = '#'.repeat(section.headingLevel);

    return (
      <h2 className={className}>
        <button onClick={() => this.toggleSection(section)} type="button">
          {`${heading} ${section.sectionTitle} (${occurence})`}
        </button>
      </h2>
    );
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
