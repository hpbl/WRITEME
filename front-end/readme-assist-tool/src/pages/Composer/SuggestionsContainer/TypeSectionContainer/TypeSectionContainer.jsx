import React from 'react';
import PropTypes from 'prop-types';
import './TypeSectionContainer.css';
import { sectionTypes } from '../../../../common/SectionTypes';
import { groupSectionsByHeadingLevel, sortByOccurence, computeFrequencyByLevel } from '../../../../common/SectionParser';
import { findChildren } from '../../../../common/ReadmeParser';
import isEquivalent from '../../../../common/Extensions';

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
    return selectedSections.findIndex(selectedSection => (
      isEquivalent(section, selectedSection)));
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
    }, () => {
      const { onSectionToggle } = this.props;
      onSectionToggle(toggledSection);
    });
  }

  sectionsToParagraph(sections, headingLevel) {
    return sections.map((section) => {
      const newSection = { sectionTitle: section[0], headingLevel, readmes: section[2] };
      const occurence = section[1];
      return this.renderSection(newSection, occurence);
    });
  }

  renderSection(section, occurence) {
    const isSelected = this.sectionIndex(section) !== -1;

    const className = isSelected ? 'selected' : 'unselected';
    const heading = '#'.repeat(section.headingLevel);
    let desiredChildren = [];
    const desiredChildrenLevel = section.headingLevel + 1;

    const { language } = this.props;

    if (isSelected) {
      const children = findChildren(section.sectionTitle, section.headingLevel, language)
        .flat(Infinity);
      const groupedChildren = computeFrequencyByLevel(children);
      desiredChildren = groupedChildren[desiredChildrenLevel - 1]; // starts on 0
    }

    return (
      <div className="section" key={`${section.sectionTitle}-${section[1]}`}>
        <h2 className={className}>
          <button onClick={() => this.toggleSection(section)} type="button">
            {`${heading} ${section.sectionTitle} (${occurence})`}
          </button>
        </h2>
        {isSelected
          && (
          <div className="children">
            {
              desiredChildren
                .map((child) => {
                  const childSection = {
                    sectionTitle: child[0],
                    headingLevel: desiredChildrenLevel,
                    readmes: child[2],
                  };
                  return this.renderSection(childSection, child[1]);
                })
            }
          </div>
          )
        }
      </div>
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
        <code className="tooltip">
          <span className="tooltiptext">{sectionTypes[sectionCode][1]}</span>
          type:
          {' '}
          {sectionTypes[sectionCode][0]}
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
  onSectionToggle: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      file_id: PropTypes.string.isRequired,
      section_id: PropTypes.string.isRequired,
    }),
  ),
  language: PropTypes.string.isRequired,
};

TypeSectionContainer.defaultProps = {
  sections: [],
};

export default TypeSectionContainer;
