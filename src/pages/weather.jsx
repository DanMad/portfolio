import Article from 'components/article';
import Heading from 'components/heading';
import Page from 'components/Page';

function Weather() {
  return (
    <Page title="The Weather">
      <Article>
        <Heading isCopyable={false}>The Weather</Heading>
        <Heading level="2">Background</Heading>
        <Heading level="2">Objective</Heading>
        <Heading level="2">Outcome</Heading>
        <a
          href="https://weather.danielmaddison.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check the weather!
        </a>
      </Article>
    </Page>
  );
}

Weather.displayName = 'Weather';

export default Weather;
