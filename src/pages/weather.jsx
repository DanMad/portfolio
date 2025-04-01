import Article from 'components/article';
import Heading from 'components/heading';
import Page from 'components/page';
import Paragraph from 'components/paragraph';

function Weather() {
  return (
    <Page title="The Weather">
      <Article>
        <Heading isCopyable={false}>The Weather</Heading>
        <Heading level="2">Background</Heading>
        <Paragraph>
          Curiosity, in a word. This wasn&rsquo;t about fixing a gap in the
          market or solving a pressing problem—rather, it was an opportunity to
          upskill. I do a fair amount of running and keep a close eye on the
          weather, so building something that made checking the forecast a
          little more engaging felt like a rewarding challenge.
        </Paragraph>
        <Paragraph>
          Beyond that, this was a chance to refine my technical
          abilities—particularly in web development and animation—while creating
          something polished enough to stand alongside my professional work.
        </Paragraph>
        <Heading level="2">Objective</Heading>
        <Paragraph>
          My goal was to build a weather app that didn&rsquo;t compromise on any
          aspect of design, performance, accessibility, or technical execution.
          I consider myself a strong all-rounder, and I wanted this project to
          reflect that.
        </Paragraph>
        <Paragraph>
          From a design perspective, I was particularly interested in developing
          a cohesive library of animated icons—an element that added complexity
          but also made the experience feel more dynamic. On the development
          side, I focused on integrating APIs efficiently, ensuring proper
          rate-limiting to avoid unnecessary resource consumption.
        </Paragraph>
        <Paragraph>
          Ultimately, this wasn&rsquo;t just a technical exercise—it was a
          portfolio piece, and I wanted it to showcase both my design
          sensibilities and my ability to deliver functional, real-world
          solutions.
        </Paragraph>
        <Heading level="2">Outcome</Heading>
        <Paragraph>
          The result was a{' '}
          <a
            href="https://weather.danielmaddison.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            single-page React app
          </a>{' '}
          that leveraged popular front-end libraries, including Lodash and
          Framer Motion, alongside the OpenWeather API. More than just a
          functional weather checker, it reinforced my ability to move quickly
          from concept to execution, bridging the gap between ideas and
          browser-based solutions.
        </Paragraph>
        <Paragraph>
          It also helped sharpen my approach to front-end development. The
          process improved my speed from inception to creation, reinforcing my
          ability to bring ideas to life in a way that goes beyond static
          prototypes.
        </Paragraph>
      </Article>
    </Page>
  );
}

Weather.displayName = 'Weather';

export default Weather;
