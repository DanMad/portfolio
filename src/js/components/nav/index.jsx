import 'on-the-case';
import { useContext, useEffect, useRef, useState } from 'react';
import { useEventListener } from '../../hooks';
import { BEM } from '../../utils';
import Context from '../context';
import DelayedNavLink from '../delayed-nav-link';
import toRefIndex from './to-ref-index';
import toStyles from './to-styles';

const { toBlock, toElement } = BEM('nav');

const Nav = () => {
  const { data, setIsReady } = useContext(Context);
  const refs = useRef([]);
  const [styles, setStyles] = useState();

  const handleClick = (refIndex) => {
    const currentStyles = toStyles(refs, refIndex);

    setIsReady(false);
    setStyles(currentStyles);
  };

  useEffect(() => {
    const refIndex = toRefIndex(refs);
    const currentStyles = toStyles(refs, refIndex);

    setStyles(currentStyles);
  }, []);

  useEventListener('popstate', () => {
    const refIndex = toRefIndex(refs);
    const currentStyles = toStyles(refs, refIndex);

    setStyles(currentStyles);
  });

  return (
    <nav className={toBlock()}>
      {data.pages.map((page, i) => (
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
