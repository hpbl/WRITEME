// import * as readmesTrees from './readmes_trees.json';
function isEqual(tree, section) {
  return (tree.name === section.title && tree.level === section.heading_level);
}

function findSectionInTreeRecursion(section, tree) {
  if (tree === []) {
    return [null];
  }

  if (isEqual(tree, section)) {
    return [tree];
  }

  return tree.children
    .map(child => findSectionInTreeRecursion(section, child));
}

export default function findSectionInTree(section, tree) {
  return findSectionInTreeRecursion(section, tree)
    .flat(Infinity)
    .filter(searchResult => searchResult.constructor === Object)[0];
}

/* eslint-disable */
Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});
