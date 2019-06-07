import React from 'react';
import PropTypes from 'prop-types';
import './TypeSectionContainer.css';
import { sectionTypes } from '../../../../common/SectionTypes';

function TypeSectionContainer(props) {
  const { sectionCode } = props;

  return (
    <div className="TypeSectionContainer">
      <code>
        type:
        {' '}
        {sectionTypes[sectionCode]}
      </code>
    </div>
  );
}

TypeSectionContainer.propTypes = {
  sectionCode: PropTypes.string.isRequired,
};

export default TypeSectionContainer;
