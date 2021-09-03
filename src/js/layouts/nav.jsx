import { useContext, useEffect, useRef, useState } from 'react';
import Context from '../components/context';
import DelayedNavLink from '../components/delayed-nav-link';
import { BEM, toStrokeStyles } from '../utils';

const { block, element } = BEM('nav');

const Nav = () => {
  const { data } = useContext(Context);
  const linkRefs = useRef([]);
  const [strokeStyles, setStrokeStyles] = useState();

  const handleClick = (linkIndex) => {
    const styles = toStrokeStyles(linkIndex, linkRefs);

    setStrokeStyles(styles);
  };

  useEffect(() => {
    const activeLink = linkRefs.current.findIndex((link) =>
      link.className.includes('active'),
    );
    const linkIndex = activeLink !== -1 ? activeLink : 0;
    const styles = toStrokeStyles(linkIndex, linkRefs);

    setStrokeStyles(styles);
  }, []);

  const pageNames = data.pages.map((page) => page.name);

  return (
    <nav className={block()}>
      <div className={element('inner')}>
        {pageNames.map((pageName, i) => (
          <DelayedNavLink
            activeClassName="active"
            className={element('link')}
            exact
            key={pageName}
            onClick={() => handleClick(i)}
            innerRef={(linkRef) => (linkRefs.current[i] = linkRef)}
            to={'/' + pageName.toKebabCase()}
          >
            {pageName.toTitleCase()}
          </DelayedNavLink>
        ))}
        <div className={element('stroke')} style={strokeStyles} />
      </div>
    </nav>
  );
};

export { Nav as default };
