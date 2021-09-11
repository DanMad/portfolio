import { useContext, useEffect, useRef, useState } from 'react';
import Context from './context';
import DelayedNavLink from './delayed-nav-link';
import { BEM, toStrokeStyles, useEventListener } from '../utils';

const { b, e } = BEM('nav');

const Nav = () => {
  const { data } = useContext(Context);
  const linkRefs = useRef([]);
  const [strokeStyles, setStrokeStyles] = useState();

  const handleClick = (linkIndex) => {
    const styles = toStrokeStyles(linkIndex, linkRefs);

    setStrokeStyles(styles);
  };

  const handleStroke = () => {
    const activeLink = linkRefs.current.findIndex((link) =>
      link.className.includes('active'),
    );
    const linkIndex = activeLink !== -1 ? activeLink : 0;
    const styles = toStrokeStyles(linkIndex, linkRefs);

    setStrokeStyles(styles);
  };

  useEffect(() => {
    handleStroke();
  }, []);

  // Browser Navigation buttons
  useEventListener('popstate', handleStroke);

  const pageNames = data.pages.map((page) => page.name);

  return (
    <nav className={b()}>
      <div className={e('inner')}>
        {pageNames.map((pageName, i) => (
          <DelayedNavLink
            activeClassName="active"
            className={e('link')}
            exact
            key={pageName}
            onClick={() => handleClick(i)}
            innerRef={(linkRef) => (linkRefs.current[i] = linkRef)}
            to={'/' + pageName.toKebabCase()}
          >
            {pageName.toTitleCase()}
          </DelayedNavLink>
        ))}
        <div className={e('stroke')} style={strokeStyles} />
      </div>
    </nav>
  );
};

export { Nav as default };
