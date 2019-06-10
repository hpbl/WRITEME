function groupSectionByFirstCode(sections) {
  const groupedSections = {};

  sections.forEach((section) => {
    const firstCode = section.section_codes[0];
    const codeArray = groupedSections[firstCode];

    if (codeArray) {
      codeArray.push(section);
    } else {
      groupedSections[firstCode] = [section];
    }
  });

  return groupedSections;
}

export default groupSectionByFirstCode;
