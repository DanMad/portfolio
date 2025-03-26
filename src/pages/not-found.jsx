import { useNavigate } from 'react-router';
import Article from 'components/article';
import Button from 'components/button';
import Heading from 'components/heading';
import Page from 'components/page';
import Paragraph from 'components/paragraph';

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Page isIndexed={false} title="Not Found">
      <Article>
        <Heading isCopyable={false}>Not Found</Heading>
        <Paragraph>The page you are looking for doesn't exist.</Paragraph>
        <Button onClick={handleClick}>Go Home</Button>
      </Article>
    </Page>
  );
}

NotFound.displayName = 'NotFound';

export default NotFound;
