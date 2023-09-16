/* 
  There are some weird things happening with the offset and the camera 
  movement because of the implementation of the smooth stop of the camera.

  My solution is to define two diferent positions.
  position is relative to the scrollComponent, that's for the nav bar, 
  displayPosition is the offset of the default camara position when facing the cube.
*/

export const PAGE_DEPH_MARGIN = 15;

export const EXPERIENCE = {
  rows: 2,
  separation: 2,
  leftPadding: -0.32,
  topPadding: 0.22,
  scale: 0.2,
  //optionally show the websiteURL inside of the cube in an Iframe
  webViewer: {
    position: [0, 0, -15],
    rotation: [Math.PI, Math.PI, Math.PI],
    height: 720,
    width: 1024,
  },
  items: [
    {
      url: 'websites-preview/medianet.png',
      websiteURL: 'https://www.medianet.com/',
    },
    {
      url: 'websites-preview/ajnalens.jpeg',
      websiteURL: 'https://www.ajnalens.com/',
    },
    {
      url: 'websites-preview/hackerrank.png',
      websiteURL: 'https://hackerrank.com/',
    },
  ],
};

export const SKILLS_LIST = {
  rows: 4,
  separation: 2.4,
  leftPadding: -0.4,
  topPadding: 0.33,
  scale: 0.15,
  items: [
    { url: 'icons/python-logo.png', websiteURL: null },
    { url: 'icons/csharp-logo.png', websiteURL: null },
    { url: 'icons/django-logo.png', websiteURL: null },
    { url: 'icons/unity-logo.png', websiteURL: null },
    { url: 'icons/js-logo.png', websiteURL: null },
    { url: 'icons/flutter-logo.png', websiteURL: null },
    { url: 'icons/flask-logo.png', websiteURL: null },
    { url: 'icons/react-logo.png', websiteURL: null },
    { url: 'icons/node-js-logo.png', websiteURL: null },
    { url: 'icons/tensorflow-logo.png', websiteURL: null },
    { url: 'icons/firebase-logo.png', websiteURL: null },
    { url: 'icons/nginx-logo.png', websiteURL: null },
  ],
};

export const STOPS = [
  { displayPosition: 0, position: 0, name: 'Title' },
  {
    position: 0.13,
    displayPosition: 0.13,
    displayPositionOffset: -0.04,
    displayPositionOffsetEnd: -0.02,
    name: 'About',
  },
  {
    position: 0.2137,
    displayPosition: 0.2007,
    displayPositionOffset: -0.03,
    displayPositionOffsetEnd: -0.07,
    name: 'Experience',
  },
  {
    position: 0.2982,
    displayPosition: 0.232,
    displayPositionOffset: 0.05,
    displayPositionOffsetEnd: -0.12,
    name: 'Skills',
  },
  {
    position: 0.3899,
    displayPosition: 0.3009,
    displayPositionOffset: 0.08,
    displayPositionOffsetEnd: -0.17,
    name: 'Download CV',
  },
  {
    position: 0.48,
    displayPosition: 0.29,
    displayPositionOffset: 0.18,
    displayPositionOffsetEnd: -0.15,
    name: 'Personal Projects',
  },
  {
    position: 0.592,
    displayPosition: 0.28,
    displayPositionOffset: 0.3,
    displayPositionOffsetEnd: -0.1,
    name: 'Get In Touch',
  },
  {
    position: 1,
    displayPosition: 1,
    displayPositionOffset: 0.03,
    displayPositionOffsetEnd: 0,
    name: 'Profile Picture',
  },
];

export const displayAt = (stopName) =>
  STOPS.find((stop) => stop.name === stopName);
