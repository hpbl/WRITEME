import React from 'react';
import './READMEContainer.css';
import TypeSectionContainer from './TypeSectionContainer/TypeSectionContainer';

function READMEContainer() {
  return (
    <div className="READMEContainer">
      <div className="TopSection">
        <h1># Project Name</h1>
        <p>&gt; tagline</p>
        <p>![header](image)</p>
      </div>
      <TypeSectionContainer />
    </div>
  );
}

export default READMEContainer;
