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


/* Especific function for every key that can group sections */
export function groupSectionsByHeadingLevel(sections) {
  return groupSectionsByKey('heading_level', sections);
}

export function groupSectionsByFirstSectionCode(sections) {
  return groupSectionsByKey('section_codes', sections);
}

export default {
  groupSectionsByHeadingLevel,
  groupSectionsByFirstSectionCode,
};
