import Article from 'components/article';
import Heading from 'components/heading';
import Page from 'components/Page';

function Home() {
  return (
    <Page title="Home">
      <Article>
        <Heading isCopyable={false}>Home</Heading>
        <p className="p">This is the Home page.</p>
        {/* {screen.orientation.type} */}
      </Article>
    </Page>
  );
}

Home.displayName = 'Home';

export default Home;
