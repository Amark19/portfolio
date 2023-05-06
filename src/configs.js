import {
  displayAt,
  STOPS,
  PAGE_DEPH_MARGIN,
  SKILLS_LIST,
  EXPERIENCE,
} from './constants/pageData';

const configs = {
  title: 'Amar Khamkar',
  subTitle: 'AmarDdev',
  stars: {
    maxSize: 20,
    emissionIntencity: 40,
    //optionally stars can be an image
    // url: 'icons/three-js-logo.png',
    dencity: 900,
  },
  navTitle: "Amar Khamkar's portfolio.",
  relevantStops: STOPS,
  pages: [
    {
      scale: 15,
      rotation: [Math.PI, 0, Math.PI],
      position: [0, 0, -PAGE_DEPH_MARGIN],
      displayAt: displayAt('About'),
      title: 'Who is Amar Khamkar ?',
      infos: [
        "- I am a problem solver who loves to utilize various technologies to develop software solutions.",
        '- A computer engineer, started my development journey using Python and Django.',
        '- Over the past four years, I have gained extensive skills in software engineering and have developed projects that have impacted over 300,000 users.',
        '- Apart from software development, I am also a fitness enthusiast who enjoys hitting the gym every day.',
      ],
    },
    {
      scale: 15,
      displayAt: displayAt('Experience'),
      rotation: [0, -Math.PI / 2, 0],
      position: [-PAGE_DEPH_MARGIN, 0, 0],
      title: 'Experience',
      imageList: EXPERIENCE,
      footer: 'You can click the icons to find out more.',
    },
    {
      scale: 15,
      displayAt: displayAt('Skills'),
      rotation: [-Math.PI / 2, 0, -Math.PI / 2],
      position: [0, PAGE_DEPH_MARGIN, 0],
      title: 'Skills',
      footer: 'And more...',
      imageList: SKILLS_LIST,
    },
    {
      scale: 15,
      displayAt: displayAt('Download CV'),
      rotation: [0, 0, 0],
      position: [0, 0, PAGE_DEPH_MARGIN],
      title: 'Here is my CV!',
      footer: 'Click the icon above to view',
      imageList: {
        rows: 1,
        separation: 3,
        leftPadding: 0,
        topPadding: 0,
        scale: 0.8,
        items: [
          {
            url: 'icons/resume.png',
            imgUrl:
              'pictures/resumes/my-resume.jpg',
          },
        ], imageViewer: {
          position: [0, 0, -15],
          rotation: [Math.PI, Math.PI, Math.PI],
          height: 1024,
          width: 1024,
        },
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Personal Projects'),
      rotation: [Math.PI / 2, 0, 0],
      position: [0, -PAGE_DEPH_MARGIN, 0],
      title: 'Projects',
      footer: '(And many more...)',
      imageList: {
        rows: 2,
        separation: 2.5,
        leftPadding: -0.4,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'websites-preview/calcont-logo.png',
            websiteURL: 'https://www.calcont.in/',
          },
          {
            url: 'websites-preview/safewrite-logo.png',
            websiteURL: 'https://play.google.com/store/apps/details?id=com.ARmarstudio.notesapp',
          },
          {
            url: 'websites-preview/monuverse-logo.png',
            websiteURL: 'https://play.google.com/store/apps/details?id=com.aprendizstudio.monuverse&hl=en_IN&gl=US',
          },
          {
            url: 'websites-preview/arlab-logo.png',
            websiteURL: 'https://play.google.com/store/apps/details?id=com.aprendizstudio.ARLAB&hl=en_IN&gl=US&pli=1',
          },
          {
            url: 'websites-preview/arsliding-logo.png',
            websiteURL: 'https://play.google.com/store/apps/details?id=com.ARmarstudio.arslidingpuzzle',
          },
          {
            url: 'websites-preview/calcont-blog-logo.png',
            websiteURL: 'https://blog.calcont.in/',
          },
        ],
      },
    },
    {
      scale: 15,
      displayAt: displayAt('Get In Touch'),
      rotation: [0, Math.PI / 2, 0],
      position: [PAGE_DEPH_MARGIN, 0, 0],
      title: 'You can find me in:',
      footer: 'Almost done but keep scrolling :)',
      imageList: {
        rows: 2,
        separation: 1.8,
        leftPadding: -0.25,
        topPadding: 0.2,
        scale: 0.3,
        items: [
          {
            url: 'icons/linkedin.png',
            websiteURL:
              'https://www.linkedin.com/in/amar-khamkar-2710731a5/',
          },
          {
            url: 'icons/github.png',
            websiteURL: 'https://github.com/Amark19',
          },
          {
            url: 'icons/email.png',
            websiteURL: 'mailto:amarkhamkar6@gmail.com',
          },
          {
            url: 'icons/twitter.png',
            websiteURL: 'https://twitter.com/AmarKhamkar6',
          },
        ],
      },
    },
  ],
};

export default configs;
