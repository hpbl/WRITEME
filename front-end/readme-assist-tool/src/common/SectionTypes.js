export const sectionTypes = {
  1: ['WHAT/WHY', 'An introduction on what your project does; the motivation behind your project, it\'s advantages.'],
  3: ['HOW', 'Instructions on how to use the project.'],
  4: ['WHEN', 'The status of the project, it\'s versions and roadmap.'],
  5: ['WHO', 'The people responsible for the project, license information, code of conduct.'],
  6: ['REFERENCES', 'External documentation, support, and related projects.'],
  7: ['CONTRIBUTION', 'Instructions on how to contribute to the project (sometimes a stand-alone file).'],
  8: ['OTHER', 'Any type of content that does not fit any of the above categories.'],
  998: ['UNCLASSIFIED'],
  999: ['EXCLUSION'],
};

export const sectionCodes = Object.keys(sectionTypes);

export default { sectionTypes, sectionCodes };
