/* eslint no-param-reassign: 0 */
import * as readmesTrees from './readmes_trees.json';

export const trees = readmesTrees.default;

function isEqual(sectionName, headingLevel, tree) {
  return (tree.name === sectionName && tree.level === headingLevel);
}

function findSectionInTreeRecursion(sectionName, headingLevel, root, repoName) {
  if (root === []) {
    return [null];
  }

  if (isEqual(sectionName, headingLevel, root)) {
    root.readme = repoName;
    return [root];
  }

  return root.children
    .map(child => findSectionInTreeRecursion(sectionName, headingLevel, child, repoName));
}

export function findSectionOccurencesInTree(section, tree, repoName) {
  const { title, heading_level: headingLevel } = section;
  return tree.map(root => findSectionInTreeRecursion(title, headingLevel, root, repoName))
    .flat(Infinity)
    .filter(searchResult => searchResult.constructor === Object);
}

export function findChildren(sectionTitle, headingLevel, treeDict = trees) {
  const section = { title: sectionTitle, heading_level: headingLevel };
  const repos = Object.keys(treeDict);
  return repos.map(repoName => findSectionOccurencesInTree(section, treeDict[repoName], repoName))
    .flat(Infinity)
    .map((occurence) => {
      occurence.children.forEach((child) => { child.readme = occurence.readme; });
      return occurence.children;
    })
    .filter(occurence => occurence.length > 0);
}

export function sectionURL(section) {
  const baseURL = 'https://github.com/';
  const trimmedSectionTitle = section.sectionTitle.replace(/ /g, '-');

  return section.readmes.map(readme => (
    `${baseURL}${readme.replace('.md', '').replace('.', '/')}#${trimmedSectionTitle}`));
}

export default {
  findSectionOccurencesInTree, findChildren, trees, sectionURL,
};


/* eslint-disable */
Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});
