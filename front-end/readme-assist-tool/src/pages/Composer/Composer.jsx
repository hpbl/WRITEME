import React from 'react';
import './Composer.css';
import READMEContainer from './READMEContainer/READMEContainer';

function Composer() {
  return (
    <div className="Composer">
      <READMEContainer />
      <div className="ExampleSection" />
    </div>
  );
}

export default Composer;
