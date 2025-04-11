import Anchor from 'components/anchor';
import Article from 'components/article';
import Heading from 'components/heading';
import Media from 'components/media';
import Page from 'components/page';
import Paragraph from 'components/paragraph';

function Weather() {
  return (
    <Page title="The Weather">
      <Article>
        <Media
          alt="Small compositions of a weather app conveying different UV Indexes and weather conditions"
          background={{
            darkMode: '#cca9d6',
            lightMode: '#f8b205',
          }}
          src="/assets/weather-app-various-comps.png"
          type="image"
        />
        <Heading isCopyable={false}>The Weather</Heading>
        <Heading level="2">Background</Heading>
        <Paragraph>
          This project started with curiosity. It wasn&rsquo;t about solving a
          market gap or tackling a high-impact business problem—instead, it was
          about exploration. I wanted to challenge myself with a hands-on
          project that coupled creative expression and technical depth.
        </Paragraph>
        <Paragraph>
          As an avid runner who regularly checks the forecast, the idea of
          building a weather app was naturally motivating. It gave me a way to
          explore a mix of design and development challenges in a format I could
          see myself using regularly. Beyond its utility, I saw this as an
          opportunity to expand my skills and create something that felt
          crafted, thoughtful, and representative of my capabilities.
        </Paragraph>
        <Heading level="2">Objective</Heading>
        <Paragraph>
          From the outset, I wanted to design and build a weather app that
          didn&rsquo;t compromise on quality. The goal was to create a
          lightweight, performant, and accessible single-page app that balanced
          user-centric design with responsible technical execution.
        </Paragraph>
        <Paragraph>
          On the design side, I focused on creating a set of animated SVG icons
          to represent weather conditions. While this level of polish
          isn&rsquo;t always feasible in commercial work, the challenge allowed
          me to refine my animation workflow and explore how motion can elevate
          everyday interactions.
        </Paragraph>
        <Media
          alt="Small compositions of a weather app conveying different UV Indexes and weather conditions"
          background="#c36bf3"
          src="/assets/weather-app-various-comps-dual.png"
          type="image"
        />
        <Paragraph>
          From a development standpoint, I wanted to demonstrate thoughtful
          integration of third-party APIs—specifically, how to consume public
          endpoints responsibly. I incorporated caching and rate-limiting to
          ensure data was accessed efficiently, with fallback options for
          reliability. These choices weren&rsquo;t just technical—they were made
          with the user experience in mind, reducing latency and ensuring
          information was quickly accessible whether based on location or a
          user-defined query in the URL.
        </Paragraph>
        <Paragraph>
          In short, this was a personal project with professional intent: I
          wanted to create something that aligned with the standards I&rsquo;d
          apply in a team setting, while giving myself space to experiment and
          grow. solutions.
        </Paragraph>
        <Heading level="2">Outcome</Heading>
        <Paragraph>
          The result was a responsive,{' '}
          <Anchor href="https://weather.danielmaddison.io/" target="_blank">
            single-page React app
          </Anchor>{' '}
          powered by OpenWeather&rsquo;s API and supported by libraries such as
          Framer Motion and Lodash. The interface adapts to the user&rsquo;s
          location or a URL-specified city, and the animated icons provide
          immediate visual context at a glance.
        </Paragraph>
        <Media
          alt="Small compositions of a weather app conveying different UV Indexes and weather conditions"
          background={{
            darkMode: '#04d304',
            lightMode: '#04d304',
          }}
          src="/assets/weather-app-low-uvi-comps.png"
          type="image"
        />
        <Paragraph>
          The project helped reinforce and accelerate my ability to move from
          idea to implementation. It sharpened how I approach front-end
          architecture, improved my comfort with React hooks, and deepened my
          understanding of how design and development decisions impact user
          experience and performance.
        </Paragraph>
        <Paragraph>
          Beyond the technical wins, the project was personally rewarding. It
          gave me the confidence to work more independently, experiment with
          motion design, and make decisions with both users and performance in
          mind. And as a bonus, it&rsquo;s something I still use most mornings
          before heading out for a run along Sydney&rsquo;s beaches.
        </Paragraph>
        <Heading level="2">Insights</Heading>
        <Paragraph>
          This project was a reminder that well-crafted tools, even small ones,
          can be meaningful—both for users and the people who build them. It
          reinforced how much I value combining aesthetic precision with
          technical responsibility, and how even personal projects benefit from
          the same strategic thinking I apply in professional environments.
        </Paragraph>
        <Paragraph>
          Most of all, it was a chance to validate my skills across disciplines.
          From design systems thinking to performance-conscious development,
          this app became a proving ground for the kind of work I enjoy
          most—work that balances creativity, rigour, and utility.
        </Paragraph>
      </Article>
    </Page>
  );
}

Weather.displayName = 'Weather';

export default Weather;
