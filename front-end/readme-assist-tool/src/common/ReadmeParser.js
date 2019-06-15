function isEqual(sectionName, headingLevel, tree) {
  return (tree.name === sectionName && tree.level === headingLevel);
}

function findSectionInTreeRecursion(sectionName, headingLevel, tree) {
  if (tree === []) {
    return [null];
  }

  if (isEqual(sectionName, headingLevel, tree)) {
    return [tree];
  }

  return tree.children
    .map(child => findSectionInTreeRecursion(sectionName, headingLevel, child));
}

export function findSectionOccurencesInTree(section, tree) {
  const { title, heading_level: headingLevel } = section;
  return tree.map(sectionTree => findSectionInTreeRecursion(title, headingLevel, sectionTree))
    .flat(Infinity)
    .filter(searchResult => searchResult.constructor === Object);
}

export function findChildren(sectionTitle, headingLevel, tree) {
  return findSectionOccurencesInTree({ title: sectionTitle, heading_level: headingLevel }, tree)
    .map(occurence => occurence.children);
}

export default { findSectionOccurencesInTree, findChildren };


/* eslint-disable */
Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});
