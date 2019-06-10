function getValueForKey(key, section) {
  const originalValue = section[key];

  if (Array.isArray(originalValue)) {
    return originalValue[0];
  }

  return originalValue;
}

export function groupSectionsByKey(key, sections) {
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

export default { groupSectionsByKey };
