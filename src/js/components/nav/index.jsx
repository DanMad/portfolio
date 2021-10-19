import 'on-the-case';
import { useContext, useEffect, useRef, useState } from 'react';
import { useEventListener } from '../../hooks';
import { BEM } from '../../utils';
import Data from '../data';
import DelayedNavLink from '../delayed-nav-link';
import toRefIndex from './to-ref-index';
import toStyles from './to-styles';

const { toBlock, toElement, toModifier } = BEM('nav');

const Nav = () => {
  const { pages } = useContext(Data);
  const refs = useRef([]);
  const [isReady, setIsReady] = useState(false);
  const [styles, setStyles] = useState({});

  const handleClick = (i) => {
    const currentStyles = toStyles(refs, i);

    setStyles(currentStyles);
  };

  useEffect(() => {
    setIsReady(true);

    const i = toRefIndex(refs);
    const currentStyles = toStyles(refs, i);

    setStyles(currentStyles);
  }, []);

  useEventListener('popstate', () => {
    const refIndex = toRefIndex(refs);
    const currentStyles = toStyles(refs, refIndex);

    setStyles(currentStyles);
  });

  const classNames = toBlock() + (isReady ? toModifier('ready') : '');

  return (
    <nav className={classNames}>
      {pages.map((page, i) => (
        <DelayedNavLink
          className={toElement('link')}
          exact
          key={page.title}
          onClick={() => handleClick(i)}
          innerRef={(ref) => (refs.current[i] = ref)}
          to={'/' + page.title.toKebabCase()}
        >
          {page.title.toTitleCase()}
        </DelayedNavLink>
      ))}
      <div className={toElement('stroke')} style={styles} />
    </nav>
  );
};

export { Nav as default };
