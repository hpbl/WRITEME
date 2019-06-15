import * as readmesTrees from './readmes_trees.json';
import { findSectionOccurencesInTree, findChildren } from './ReadmeParser';

const alamoTree = [
  {
    children: [],
    id: 'features',
    level: 2,
    name: 'Features',
  },
  {
    children: [],
    id: 'component-libraries',
    level: 2,
    name: 'Component Libraries',
  },
  {
    children: [],
    id: 'requirements',
    level: 2,
    name: 'Requirements',
  },
  {
    children: [],
    id: 'migration-guides',
    level: 2,
    name: 'Migration Guides',
  },
  {
    children: [],
    id: 'communication',
    level: 2,
    name: 'Communication',
  },
  {
    children: [
      {
        children: [],
        id: 'cocoapods',
        level: 3,
        name: 'CocoaPods',
      },
      {
        children: [],
        id: 'carthage',
        level: 3,
        name: 'Carthage',
      },
      {
        children: [
          {
            children: [],
            id: 'swift-4',
            level: 4,
            name: 'Swift 4',
          },
        ],
        id: 'swift-package-manager',
        level: 3,
        name: 'Swift Package Manager',
      },
      {
        children: [
          {
            children: [],
            id: 'embedded-framework',
            level: 4,
            name: 'Embedded Framework',
          },
        ],
        id: 'manually',
        level: 3,
        name: 'Manually',
      },
    ],
    id: 'installation',
    level: 2,
    name: 'Installation',
  },
  {
    children: [],
    id: 'open-radars',
    level: 2,
    name: 'Open Radars',
  },
  {
    children: [],
    id: 'resolved-radars',
    level: 2,
    name: 'Resolved Radars',
  },
  {
    children: [
      {
        children: [],
        id: 'whats-the-origin-of-the-name-alamofire',
        level: 3,
        name: 'What\'s the origin of the name Alamofire?',
      },
    ],
    id: 'faq',
    level: 2,
    name: 'FAQ',
  },
  {
    children: [
      {
        children: [],
        id: 'security-disclosure',
        level: 3,
        name: 'Security Disclosure',
      },
    ],
    id: 'credits',
    level: 2,
    name: 'Credits',
  },
  {
    children: [],
    id: 'donations',
    level: 2,
    name: 'Donations',
  },
  {
    children: [],
    id: 'license',
    level: 2,
    name: 'License',
  },
];
const alamoSections = [
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      1,
    ],
    section_id: '1',
    title: 'Features',
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      1,
      6,
    ],
    section_id: '2',
    title: 'Component Libraries',
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      3,
    ],
    section_id: '3',
    title: 'Requirements',
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      6,
    ],
    section_id: '4',
    title: 'Migration Guides',
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      6,
      7,
    ],
    section_id: '5',
    title: 'Communication',
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      3,
    ],
    section_id: '6',
    title: 'Installation',
  },
  {
    file_id: '23',
    heading_level: 3,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      1,
    ],
    section_id: '7',
    title: 'CocoaPods',
  },
  {
    file_id: '23',
    heading_level: 3,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      3,
    ],
    section_id: '8',
    title: 'Carthage',
  },
  {
    file_id: '23',
    heading_level: 3,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      1,
      3,
    ],
    section_id: '9',
    title: 'Swift Package Manager',
  },
  {
    file_id: '23',
    heading_level: 4,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      3,
    ],
    section_id: '10',
    title: 'Swift 4',
  },
  {
    file_id: '23',
    heading_level: 3,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      3,
    ],
    section_id: '11',
    title: 'Manually',
  },
  {
    file_id: '23',
    heading_level: 4,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      3,
    ],
    section_id: '12',
    title: 'Embedded Framework',
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      3,
    ],
    section_id: '13',
    title: 'Open Radars',
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      998,
    ],
    section_id: '14',
    title: 'Resolved Radars',
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      999,
      6,
    ],
    section_id: '15',
    title: 'FAQ',
  },
  {
    file_id: '23',
    heading_level: 3,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      1,
    ],
    section_id: '16',
    title: "What's the origin of the name Alamofire?",
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      5,
    ],
    section_id: '17',
    title: 'Credits',
  },
  {
    file_id: '23',
    heading_level: 3,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      6,
    ],
    section_id: '18',
    title: 'Security Disclosure',
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      6,
    ],
    section_id: '19',
    title: 'Donations',
  },
  {
    file_id: '23',
    heading_level: 2,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      5,
    ],
    section_id: '20',
    title: 'License',
  }];

/* findSectionInTree tests */
test('finds section in tree top level', () => {
  const desiredSectionTree = alamoTree[0];
  expect(findSectionOccurencesInTree(alamoSections[0], alamoTree)[0])
    .toBe(desiredSectionTree);
});


test('finds section in second level', () => {
  const desiredSectionTree = {
    children: [],
    id: 'carthage',
    level: 3,
    name: 'Carthage',
  };

  const section = {
    file_id: '23',
    heading_level: 3,
    readme_file_name: 'Alamofire.Alamofire.md',
    section_codes: [
      3,
    ],
    section_id: '8',
    title: 'Carthage',
  };

  expect(findSectionOccurencesInTree(section, alamoTree)[0])
    .toMatchObject(desiredSectionTree);
});

/* findChildren tests */
test('finds children from section name and heading level', () => {
  const desiredSectionTree = [alamoTree[5].children];
  expect(findChildren('Installation', 2, alamoTree))
    .toMatchObject(desiredSectionTree);
});

test('finds correct amount of occurences', () => {
  const section = { title: 'Security', heading_level: 2 };
  const trees = Object.keys(readmesTrees)
    .filter(key => key !== 'default')
    .map(file => readmesTrees[file]);

  const occurences = trees
    .map(tree => findSectionOccurencesInTree(section, tree))
    .filter(occurence => occurence.length > 0);

  expect(occurences.length)
    .toBe(2);
});
