import { useNavigate } from 'react-router';
import Article from 'components/article';
import Heading from 'components/heading';
import Page from 'components/Page';
import Button from 'components/button';

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Page isIndexed={false} title="Not Found">
      <Article>
        <Heading isCopyable={false}>Not Found</Heading>
        <p className="p">The page you are looking for doesn't exist.</p>
        <Button onClick={handleClick}>Go Home</Button>
      </Article>
    </Page>
  );
}

NotFound.displayName = 'NotFound';

export default NotFound;
