import Button from 'components/button';
import 'styles/a11y-link';

function A11yLink() {
  const handleClick = () => {
    // window.location.hash is used here to ensure default browser behavior,
    // instead of useNavigate from react-router.
    window.location.hash = '';
    window.location.hash = '#main';
  };

  return (
    <Button className="a11y-link" onClick={handleClick} type="secondary">
      Skip to Content
    </Button>
  );
}

if (process.env.NODE_ENV !== 'production') {
  A11yLink.displayName = 'A11yLink';
}

export default A11yLink;
