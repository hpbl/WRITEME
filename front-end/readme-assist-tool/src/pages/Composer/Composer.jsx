import React from 'react';
import './Composer.css';
import SuggestionsContainer from './SuggestionsContainer/SuggestionsContainer';

function Composer() {
  return (
    <div className="Composer">
      <SuggestionsContainer />
      <div className="ExampleSection" />
    </div>
  );
}

export default Composer;
