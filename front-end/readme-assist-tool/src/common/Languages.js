import swiftSections from './languages/swift_sections';
import * as swiftReadmesTrees from './languages/readmes_trees.json';

import pythonSections from './languages/python_sections';
import * as pythonReadmesTrees from './languages/python_trees.json';

import csharpSections from './languages/csharp_sections';
import * as csharpReadmesTrees from './languages/csharp_trees.json';

import cppSections from './languages/cpp_sections';
import * as cppReadmesTrees from './languages/cpp_trees.json';

const supportedLanguages = {
  swift: {
    presentationName: 'Swift',
    sections: swiftSections,
    trees: swiftReadmesTrees,
  },
  python: {
    presentationName: 'Python',
    sections: pythonSections,
    trees: pythonReadmesTrees,
  },
  csharp: {
    presentationName: 'C#',
    sections: csharpSections,
    trees: csharpReadmesTrees,
  },
  cpp: {
    presentationName: 'C++',
    sections: cppSections,
    trees: cppReadmesTrees,
  },
};

export function getSections(language) {
  return supportedLanguages[language].sections;
}

export function getTrees(language) {
  return supportedLanguages[language].trees.default;
}

export function getPresentationName(language) {
  return supportedLanguages[language].presentationName;
}

export function getLanguages() {
  return Object.keys(supportedLanguages).map(key => ({
    presentationName: supportedLanguages[key].presentationName,
    urlName: key,
  }));
}

export default { supportedLanguages, getSections };
