import { useContext, useEffect, useRef, useState } from 'react';
import Context from '../components/context';
import DelayedNavLink from '../components/delayed-nav-link';
import { BEM } from '../utils';

const { block, element } = BEM('nav');

const Nav = () => {
  const { data } = useContext(Context);
  const links = useRef([]);
  const [strokeStyles, setStrokeStyles] = useState();

  const toStrokeStyles = (linkIndex) => {
    const width = links.current[linkIndex].offsetWidth;
    let left = 0;

    for (let i = 0; i <= linkIndex; i++) {
      if (i === linkIndex) {
        left += links.current[i].offsetWidth / 2;
      } else {
        left += links.current[i].offsetWidth + 24;
      }
    }

    return {
      left,
      width,
    };
  };

  const handleClick = (linkIndex) => {
    const styles = toStrokeStyles(linkIndex);

    setStrokeStyles(styles);
  };

  useEffect(() => {
    const activeLink = links.current.findIndex((link) =>
      link.className.includes('active'),
    );
    const linkIndex = activeLink !== -1 ? activeLink : 0;
    const styles = toStrokeStyles(linkIndex);

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
            innerRef={(link) => (links.current[i] = link)}
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
