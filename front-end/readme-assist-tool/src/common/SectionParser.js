function getValueForKey(key, section) {
  const originalValue = section[key];

  if (Array.isArray(originalValue)) {
    return originalValue[0];
  }

  return originalValue;
}

function groupSectionsByKey(key, sections) {
  const groupedSections = {};

  sections.forEach((section) => {
    const groupKey = getValueForKey(key, section);
    const codeArray = groupedSections[groupKey];

    if (codeArray) {
      codeArray.push(section);
    } else {
      groupedSections[groupKey] = [section];
    }
  });

  return groupedSections;
}


/* Grouping by Keys */
export function groupSectionsByHeadingLevel(sections) {
  return groupSectionsByKey('heading_level', sections);
}

export function groupSectionsByFirstSectionCode(sections) {
  return groupSectionsByKey('section_codes', sections);
}

/* Compute occurences and remove duplicates */
export function sortByOccurence(sections) {
  const occurences = {};
  sections.forEach((section) => {
    const trimmedTitle = section.title.trim();
    if (trimmedTitle !== '') {
      occurences[trimmedTitle] = (occurences[trimmedTitle] || 0) + 1;
    }
  });

  const sortableOccurences = Object.keys(occurences).map(title => [title, occurences[title]]);

  sortableOccurences.sort((titleA, titleB) => titleB[1] - titleA[1]);

  return sortableOccurences;
}

/* Groups section (from tree) by level and computes the frequency of occurences
    input: [{name, level}, ...]
    output: [{name: occurences}, ...] (one for each heading level - start in 0)
*/
export function computeFrequencyByLevel(sections) {
  const frequencyByLevel = {
    1: {}, 2: {}, 3: {}, 4: {}, 5: {}, 6: {},
  };

  sections.forEach((section) => {
    const levelSections = frequencyByLevel[section.level];
    const trimmedTitle = section.name.trim();
    if (trimmedTitle !== '') {
      levelSections[trimmedTitle] = (levelSections[trimmedTitle] || 0) + 1;
    }
  });

  return Object.keys(frequencyByLevel).map((level) => {
    const levelSections = frequencyByLevel[level];
    const sortableOccurences = Object.keys(levelSections)
      .map(title => [title, levelSections[title]]);
    sortableOccurences.sort((titleA, titleB) => titleB[1] - titleA[1]);
    return sortableOccurences;
  });
}


export default {
  groupSectionsByHeadingLevel,
  groupSectionsByFirstSectionCode,
  sortByOccurence,
  computeFrequencyByLevel,
};
