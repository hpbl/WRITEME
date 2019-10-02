import React from 'react';
import PropTypes from 'prop-types';

import { findChildren } from '../../../../common/ReadmeParser';
import { computeFrequencyByLevel } from '../../../../common/SectionParser';

const getGroupedChildren = ({ section, language }) => {
  const children = findChildren(
    section.sectionTitle,
    section.headingLevel,
    language,
  ).flat(Infinity);
  return computeFrequencyByLevel(children);
};

const makeSectionObject = ([sectionTitle, , readmes], headingLevel) => ({
  sectionTitle,
  headingLevel,
  readmes,
});

const Section = ({
  getIsSectionSelected,
  section,
  language,
  occurence,
  toggleSection,
}) => {
  const isSelected = getIsSectionSelected(section);
  const className = isSelected ? 'selected' : 'unselected';
  const heading = '#'.repeat(section.headingLevel);
  const desiredChildrenLevel = section.headingLevel + 1;
  const desiredChildren = isSelected
    ? getGroupedChildren({ section, language })[section.headingLevel]
    : [];
  const desiredChildrenSections = desiredChildren
    .map(child => makeSectionObject(child, desiredChildrenLevel));

  const toggleSelectedChildren = (childrenSections, currentLevel) => {
    childrenSections
      .filter(getIsSectionSelected)
      .forEach((childSection) => {
        const nextLevel = currentLevel + 1;
        const deeperChildren = getGroupedChildren({
          section: childSection,
          language,
        })[currentLevel];

        if (deeperChildren && deeperChildren.length > 0) {
          toggleSelectedChildren(deeperChildren.map(makeSectionObject, nextLevel), nextLevel);
        }

        toggleSection(childSection);
      });
  };

  const handleToggleSelf = () => {
    if (isSelected) {
      toggleSelectedChildren(desiredChildrenSections, desiredChildrenLevel);
    }
    toggleSection(section);
  };

  return (
    <div className="section">
      <h2 className={className}>
        <button onClick={handleToggleSelf} type="button">
          {`${heading} ${section.sectionTitle} (${occurence})`}
        </button>
      </h2>
      {isSelected && (
        <div className="children">
          {desiredChildren.map((child, index) => (
            <Section
              key={`${child[0]}-${child[1]}`}
              section={desiredChildrenSections[index]}
              occurence={child[1]}
              getIsSectionSelected={getIsSectionSelected}
              language={language}
              toggleSection={toggleSection}
            />
          ))}
        </div>
      )}
    </div>
  );
};

Section.propTypes = {
  toggleSection: PropTypes.func.isRequired,
  getIsSectionSelected: PropTypes.func.isRequired,
  section: PropTypes.shape({
    sectionTitle: PropTypes.string.isRequired,
    headingLevel: PropTypes.number.isRequired,
    readmes: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  occurence: PropTypes.number.isRequired,
  language: PropTypes.string.isRequired,
};

export default Section;
