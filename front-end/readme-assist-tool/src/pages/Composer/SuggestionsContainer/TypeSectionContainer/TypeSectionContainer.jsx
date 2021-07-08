import React from 'react';
import PropTypes from 'prop-types';
import './TypeSectionContainer.css';
import { sectionTypes } from '../../../../common/SectionTypes';
import { groupSectionsByHeadingLevel, sortByOccurence } from '../../../../common/SectionParser';
import isEquivalent from '../../../../common/Extensions';
import Section from './Section';

class TypeSectionContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headingLevel: 2,
      selectedSections: [],
    };

    this.getIsSectionSelected = this.getIsSectionSelected.bind(this);
    this.toggleSection = this.toggleSection.bind(this);
  }

  getIsSectionSelected(section) {
    return this.sectionIndex(section) >= 0;
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
    const { language } = this.props;
    return sections.map((section) => {
      const newSection = { sectionTitle: section[0], headingLevel, readmes: section[2] };
      const occurence = section[1];
      return (
        <Section
          key={`${newSection.sectionTitle}-${occurence}`}
          language={language}
          section={newSection}
          occurence={occurence}
          getIsSectionSelected={this.getIsSectionSelected}
          toggleSection={this.toggleSection}
        />
      );
    });
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
