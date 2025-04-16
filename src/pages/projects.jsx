import { nanoid } from 'nanoid';
import Slider from 'components/slider';
import Page from 'components/page';

const projects = [
  // {
  //   composition: {
  //     isAngled: true,
  //     srcs: ['', '', ''],
  //     type: 'screens',
  //   },
  //   description: 'The launch of Eddy’s multi-tenancy Design System',
  //   id: nanoid(),
  //   title: 'Eddy Design System',
  //   to: '/projects/eddy-design-system',
  // },
  {
    composition: {
      hasDarkMode: false,
      isAngled: true,
      srcs: [
        '/assets/oc-sign-in-comp.svg',
        '/assets/oc-quiz-comp-1.svg',
        '/assets/oc-quiz-comp-2.svg',
      ],
      type: 'screens',
    },
    description:
      'Establishing a design system to scale and streamline delivery',
    id: nanoid(),
    title: 'Open Colleges’ Design System',
    to: '/projects/open-colleges-design-system',
  },
  {
    composition: {
      hasDarkMode: false,
      srcs: [
        '/assets/weather-app-low-uvi-comp.svg',
        '/assets/weather-app-moderate-uvi-comp.svg',
        '/assets/weather-app-extreme-uvi-comp.svg',
      ],
      type: 'screens',
    },
    description:
      'Crafted UVI and weather forecasts through design, code, and animation',
    id: nanoid(),
    title: 'The Weather',
    to: '/projects/weather',
  },
  {
    composition: {
      hasDarkMode: false,
      srcs: [
        '/assets/personal-brand-resume-comp-light.svg',
        '/assets/personal-brand-tax-invoice-comp-light.svg',
      ],
      type: 'pages',
    },
    description:
      'Blending design and development into a cohesive personal identity',
    id: nanoid(),
    title: 'Personal Brand',
    to: '/projects/personal-brand',
  },
];

function Projects() {
  return (
    <Page title="Projects">
      <Slider slides={projects} />
    </Page>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Projects.displayName = 'Projects';
}

export default Projects;
