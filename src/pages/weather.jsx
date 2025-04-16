import Anchor from 'components/anchor';
import Article from 'components/article';
import Heading from 'components/heading';
import Media from 'components/media';
import Page from 'components/page';
import Paragraph from 'components/paragraph';
import WeatherIcon from 'components/weather-icon';

function Weather() {
  return (
    <Page title="The Weather">
      <Article>
        <Media
          alt="Small and large compositions of a weather app conveying a low UV Index and rainy weather conditions"
          background="#af5be5"
          src="/assets/weather-app-extreme-uvi-comps.png"
          type="image"
        />
        <Heading isCopyable={false}>The Weather</Heading>
        <Heading level="2">Background</Heading>
        <Paragraph>
          This project started with curiosity. It wasn&rsquo;t about filling a
          gap in the market or solving a high-impact business problem. I wanted
          to challenge myself with a project that combined creative expression
          and technical exploration.
        </Paragraph>
        <Paragraph>
          As a runner, I regularly check the forecast before pounding the
          pavement. So the idea of building a weather app was genuinely
          exciting. It gave me a way to explore a mix of design and development
          challenges with real-world utility that I&rsquo;d use often. It was a
          chance to expand my skills and ship a simple product that felt
          crafted, considered, and reflective of my capabilities.
        </Paragraph>
        <Heading level="2">Objective</Heading>
        <Paragraph>
          From the start, I was aiming to design and build a weather app that
          didn&rsquo;t compromise on quality. The goal was to create a
          performant single-page app that balanced accessibility,
          user-centric design, and responsible technical execution. Not just a
          tool I&rsquo;d find useful, but one that runners, commuters, and
          everyday users would benefit from as well.
        </Paragraph>
        <Paragraph>
          On the design side, I created a suite of animated SVG icons to
          represent weather conditions. While this level of polish isn&rsquo;t
          always feasible in commercial work, the challenge allowed me to refine
          my animation workflow and explore how motion can elevate everyday
          design and interaction.
        </Paragraph>
        <Media
          aspectRatio="5:3"
          background='transparent'
          type="inline"
        >
          <div className="weather-icons">
            <WeatherIcon hasTabIndex={true} size="100%" type="sunrise" />
            <WeatherIcon hasTabIndex={true} size="100%" type="clear-day" />
            <WeatherIcon hasTabIndex={true} size="100%" type="cloudy-day" />
            <WeatherIcon hasTabIndex={true} size="100%" type="drizzle-day" />
            <WeatherIcon hasTabIndex={true} size="100%" type="rain" />
            <WeatherIcon hasTabIndex={true} size="100%" type="sunset" />
            <WeatherIcon hasTabIndex={true} size="100%" type="clear-night" />
            <WeatherIcon hasTabIndex={true} size="100%" type="cloudy-night" />
            <WeatherIcon hasTabIndex={true} size="100%" type="drizzle-night" />
            <WeatherIcon hasTabIndex={true} size="100%" type="overcast" />
            <WeatherIcon size="100%" type="snow" />
            <WeatherIcon size="100%" type="wind" />
            <WeatherIcon size="100%" type="storm" />
            <WeatherIcon size="100%" type="humidity" />
            <WeatherIcon size="100%" type="pressure" />
          </div>
        </Media>
        <Paragraph>
          From a development standpoint, I wanted to demonstrate thoughtful
          integration of third-party APIs. Specifically, I wanted to explore how
          to consume public endpoints responsibly. I incorporated caching and
          rate-limiting to ensure efficient data fetching, with fallback options
          for reliability. These choices weren&rsquo;t just technical, they were
          made with the user experience in mind, reducing latency and ensuring
          information was quickly accessible, whether based on location or
          defined by a URL query.
        </Paragraph>
        <Paragraph>
          In short, this was a personal project with professional intent: I
          wanted to create something that aligned with the standards I&rsquo;d
          apply in a team setting, while giving myself space to experiment and
          grow.
        </Paragraph>
        <Heading level="2">Outcome</Heading>
        <Paragraph>
          The result was a responsive,{' '}
          <Anchor href="https://weather.danielmaddison.io/" target="_blank">
            single-page React app
          </Anchor>{' '}
          powered by OpenWeather&rsquo;s API and is supported by libraries like
          Framer Motion and Lodash. The interface adapts to the user&rsquo;s
          location or a city when specified in the URL, and the animated icons
          provide immediate visual context at a glance.
        </Paragraph>
        <Media
          alt="Small compositions of Daniel Maddison’s weather app conveying different weather conditions during night and day"
          background="#04bd04"
          src="/assets/weather-app-various-comps-dual.png"
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
          Beyond the technical wins, the project gave me the confidence to work
          more independently, be bolder with motion, and make decisions that
          considered user needs as well as performance goals. And as a bonus,
          it&rsquo;s something I still use most days before heading out for a
          run along Sydney&rsquo;s amazing harbour.
        </Paragraph>
        <Heading level="2">Insights</Heading>
        <Paragraph>
          This project was a reminder that well-crafted tools, even simple ones,
          can be meaningful. Both for users and the people who build them. It
          reinforced how much I value combining aesthetic precision with
          technical responsibility, and how even personal projects benefit from
          the same strategic thinking I apply in professional environments.
        </Paragraph>
        <Paragraph>
          Most of all, it was a chance to validate my skills across disciplines.
          From design systems thinking to performance-conscious development,
          this app became a proving ground for the kind of work I enjoy most:
          the intersection of creativity, precision and scalability.
        </Paragraph>
      </Article>
    </Page>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Weather.displayName = 'Weather';
}

export default Weather;
