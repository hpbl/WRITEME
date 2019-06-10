import React from 'react';
import PropTypes from 'prop-types';
import './TypeSectionContainer.css';
import { sectionTypes } from '../../../../common/SectionTypes';

function TypeSectionContainer(props) {
  const { sectionCode, sections } = props;

  return (
    <div className="TypeSectionContainer">
      <code>
        type:
        {' '}
        {sectionTypes[sectionCode]}
      </code>
      {
        sections.map(section => (
          <p key={`${section.file_id}-${section.section_id}`}>{section.title}</p>
        ))
      }
    </div>
  );
}

TypeSectionContainer.propTypes = {
  sectionCode: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ),
};

TypeSectionContainer.defaultProps = {
  sections: [],
};

export default TypeSectionContainer;
