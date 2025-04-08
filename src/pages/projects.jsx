import { nanoid } from 'nanoid';
import Slider from 'components/slider';
import Page from 'components/page';

const projects = [
  {
    composition: {
      isAngled: true,
      srcs: ['', '', ''],
      type: 'screens',
    },
    description: 'The launch of Eddy’s multi-tenancy Design System',
    id: nanoid(),
    title: 'Eddy Design System',
    to: '/projects/eddy-design-system',
  },
  {
    composition: {
      hasDarkMode: false,
      srcs: ['', '', ''],
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
      isAngled: true,
      srcs: [
        '/assets/oc-sign-in-comp-1.svg',
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
      srcs: ['', ''],
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

Projects.displayName = 'Projects';

export default Projects;
