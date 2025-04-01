import Article from 'components/article';
import Heading from 'components/heading';
import Page from 'components/page';
import Paragraph from 'components/paragraph';

function Home() {
  return (
    <Page title="Home">
      <Article>
        <Heading isCopyable={false}>Home</Heading>
        <Paragraph>
          Hi, my name&rsquo;s Daniel Maddison.
          <br />I help companies drive growth through design that solves
          business challenges while enhancing the user experience. Passionate
          about innovating and making an impact with the products I deliver, I
          thrive on creating solutions that make a real difference and sharing
          that journey along the way.
        </Paragraph>
      </Article>
    </Page>
  );
}

Home.displayName = 'Home';

export default Home;
