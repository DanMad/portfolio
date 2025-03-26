import { nanoid } from 'nanoid';
import Slider from 'components/slider';
import Page from 'components/page';

const projects = [
  // {
  //   artworks: {
  //     type: 'angled-screens',
  //     urls: [
  //       // '/public/assets/filename.png',
  //     ],
  //   },
  //   description: 'The launch of Eddy’s multi-tenancy Design System',
  //   id: nanoid(),
  //   title: 'Eddy Design System',
  //   to: '/projects/eddy-design-system',
  // },
  {
    artworks: {
      hasDarkMode: false,
      type: 'straight-screens',
      urls: [
        '/assets/360x640-placeholder-1.svg',
        '/assets/360x640-placeholder-2.svg',
        '/assets/360x640-placeholder-3.svg',
      ],
    },
    description: 'A weather app that emphasises the UV Index',
    id: nanoid(),
    title: 'The Weather',
    to: '/projects/weather',
  },
  {
    artworks: {
      hasDarkMode: false,
      type: 'angled-screens',
      urls: [
        '/assets/360x640-placeholder-3.svg',
        '/assets/360x640-placeholder-2.svg',
        '/assets/360x640-placeholder-1.svg',
      ],
    },
    description: 'The launch of Open Colleges’ Design System',
    id: nanoid(),
    title: 'Open Colleges’ Design System',
    to: '/projects/open-colleges-design-system',
  },
  {
    artworks: {
      type: 'pages',
      urls: ['https://placehold.co/595x842', 'https://placehold.co/595x842'],
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
