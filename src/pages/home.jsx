import Article from 'components/article';
import Heading from 'components/heading';
import Page from 'components/Page';
import Paragraph from 'components/paragraph';

function Home() {
  return (
    <Page title="Home">
      <Article>
        <Heading isCopyable={false}>Home</Heading>
        <Paragraph>This is the Home page.</Paragraph>
      </Article>
    </Page>
  );
}

Home.displayName = 'Home';

export default Home;
