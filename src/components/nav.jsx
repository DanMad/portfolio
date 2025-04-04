import { Link } from 'react-router';
import Button from 'components/button';
import 'styles/nav';

function Nav() {
  const handleClick = () => {
    const body = encodeURIComponent('Hello Daniel,\n\n');
    const recipient = 'hello@danielmaddison.io';
    const subject = encodeURIComponent("I'm reaching out through your site.");

    window.open(
      `mailto:${recipient}?body=${body}&subject=${subject}`,
      '_blank',
    );
  };

  return (
    <nav className="nav">
      <Link className="nav__logo" to="/" />
      <div className="nav__divider" />
      <ul className="nav__list">
        <li className="nav__item">
          <Link className="nav__link" to="/projects">
            Projects
          </Link>
        </li>
        <li className="nav__item">
          <Link className="nav__link" to="/about">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Button onClick={handleClick} type="secondary">
            Contact
          </Button>
        </li>
      </ul>
    </nav>
  );
}

Nav.displayName = 'Nav';

export default Nav;
