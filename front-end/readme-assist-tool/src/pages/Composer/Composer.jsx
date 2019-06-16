import React from 'react';
import './Composer.css';
import SuggestionsContainer from './SuggestionsContainer/SuggestionsContainer';
import READMEContainer from './READMEContainer/READMEContainer';
import isEqual from '../../common/Extensions';

class Composer extends React.Component {
  constructor() {
    super();
    this.state = {
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

  render() {
    const { selectedSections } = this.state;

    return (
      <div className="Composer">
        <SuggestionsContainer onSectionToggle={section => this.toggleSection(section)} />
        <READMEContainer selectedSections={selectedSections} />
      </div>
    );
  }
}

export default Composer;
