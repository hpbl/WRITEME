import React from 'react';
import PropTypes from 'prop-types';
import { sectionURL } from '../../../common/ReadmeParser';
import './READMEContainer.css';

function markdownHeaderToHTML(section) {
  const title = section.sectionTitle;
  const level = section.headingLevel;
  const markdownTitle = `${'#'.repeat(level)} ${title}`;
  const key = `${title}-${level}`;

  let header;
  switch (level) {
    case 1:
      header = <h1 key={key}>{markdownTitle}</h1>;
      break;
    case 2:
      header = <h2 key={key}>{markdownTitle}</h2>;
      break;
    case 3:
      header = <h3 key={key}>{markdownTitle}</h3>;
      break;
    case 4:
      header = <h4 key={key}>{markdownTitle}</h4>;
      break;
    case 5:
      header = <h5 key={key}>{markdownTitle}</h5>;
      break;
    case 6:
      header = <h6 key={key}>{markdownTitle}</h6>;
      break;
    default:
      console.log(`Unexpected headingLevel ${level}`);
  }

  const exampleURL = sectionURL(section)[0];
  const exampleLink = (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={exampleURL}
    >
      [//]: # (
      {exampleURL}
      )
    </a>
  );

  return (
    <div>
      {header}
      {exampleLink}
    </div>
  );
}

function downloadMarkdownFile() {
  const element = document.createElement('a');
  const file = new Blob([document.getElementById('READMEcontent').innerText], { type: 'text/plain' });
  element.href = URL.createObjectURL(file);
  element.download = 'README.md';
  document.body.appendChild(element); // Required for this to work in FireFox
  element.click();
}

const READMEContainer = ({ selectedSections }) => (
  <div className="READMEContainer">
    <button type="button" onClick={downloadMarkdownFile}>Download</button>
    <div id="READMEcontent">
      <div className="TopSection">
        <h1># Project Name</h1>
        <p>&gt; tagline</p>
        <p>![header](image)</p>
      </div>
      {
        selectedSections.map(section => markdownHeaderToHTML(section))
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
