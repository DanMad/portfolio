import { nanoid } from 'nanoid';
import Slider from 'components/slider';
import Page from 'components/page';

const projects = [
  // {
  //   composition: {
  //     srcs: [
  //       // '/public/assets/filename.png',
  //     ],
  //     type: 'angled-screens',
  //   },
  //   description: 'The launch of Eddy’s multi-tenancy Design System',
  //   id: nanoid(),
  //   title: 'Eddy Design System',
  //   to: '/projects/eddy-design-system',
  // },
  {
    composition: {
      hasDarkMode: false,
      srcs: [
        '/assets/360x640-placeholder-1.svg',
        '/assets/360x640-placeholder-2.svg',
        '/assets/360x640-placeholder-3.svg',
      ],
      type: 'screens',
    },
    description: 'A weather app that emphasises the UV Index',
    id: nanoid(),
    title: 'The Weather',
    to: '/projects/weather',
  },
  {
    composition: {
      hasDarkMode: false,
      isAngled: true,
      srcs: [
        '/assets/360x640-placeholder-3.svg',
        '/assets/360x640-placeholder-2.svg',
        '/assets/360x640-placeholder-1.svg',
      ],
      type: 'screens',
    },
    description: 'The launch of Open Colleges’ Design System',
    id: nanoid(),
    title: 'Open Colleges’ Design System',
    to: '/projects/open-colleges-design-system',
  },
  {
    composition: {
      srcs: ['https://placehold.co/595x842', 'https://placehold.co/595x842'],
      type: 'pages',
    },
    description: 'The personal brand that informs my online presence',
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
