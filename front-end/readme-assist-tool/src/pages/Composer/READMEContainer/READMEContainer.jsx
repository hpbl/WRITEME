import React from 'react';
import PropTypes from 'prop-types';
import './READMEContainer.css';

function markdownHeaderToHTML(title, level) {
  const key = `${title}-${level}`;
  switch (level) {
    case 1:
      return <h1 key={key}>{title}</h1>;
    case 2:
      return <h2 key={key}>{title}</h2>;
    case 3:
      return <h3 key={key}>{title}</h3>;
    case 4:
      return <h4 key={key}>{title}</h4>;
    case 5:
      return <h5 key={key}>{title}</h5>;
    case 6:
      return <h6 key={key}>{title}</h6>;
    default:
      console.log(`Unexpected headingLevel ${level}`);
      return undefined;
  }
}

const READMEContainer = ({ selectedSections }) => (
  <div className="READMEContainer">
    <div className="content">
      <div className="TopSection">
        <h1># Project Name</h1>
        <p>&gt; tagline</p>
        <p>![header](image)</p>
      </div>
      {
        selectedSections.map((section) => {
          const title = section.sectionTitle;
          const level = section.headingLevel;
          return markdownHeaderToHTML(title, level);
        })
      }
    </div>
  </div>
);

READMEContainer.propTypes = {
  selectedSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      file_id: PropTypes.string.isRequired,
      section_id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default READMEContainer;
