import { Link } from 'react-router';
import Button from 'components/button';
import 'styles/nav';

const body = encodeURIComponent('Hello Daniel,\n\n');
const recipient = 'hello@danielmaddison.io';
const subject = encodeURIComponent("I'm reaching out through your site.");

function Nav() {
  const handleClick = () => {
    // Avoiding window.open to ensure the mailto: link works consistently in
    // browsers like Brave and Firefox, which may block them due to popup
    // restrictions. Simulating a user-initiated anchor click instead.
    const anchorElement = document.createElement('a');

    anchorElement.href = `mailto:${recipient}?body=${body}&subject=${subject}`;
    anchorElement.click();
  };

  return (
    <nav className="nav">
      <div className="nav__logo" />
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
