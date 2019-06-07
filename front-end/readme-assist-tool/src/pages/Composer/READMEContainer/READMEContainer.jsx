import React from 'react';
import './READMEContainer.css';

import TypeSectionContainer from './TypeSectionContainer/TypeSectionContainer';
import { sectionCodes } from '../../../common/SectionTypes';

function READMEContainer() {
  return (
    <div className="READMEContainer">
      <div className="TopSection">
        <h1># Project Name</h1>
        <p>&gt; tagline</p>
        <p>![header](image)</p>
      </div>
      {
        sectionCodes.map(code => (
          <TypeSectionContainer sectionCode={code} key={code} />
        ))
      }
    </div>
  );
}

export default READMEContainer;
