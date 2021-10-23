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
  const { app, data } = useContext(Context);
  const refs = useRef([]);
  const [isReady, setIsReady] = useState(false);
  const [styles, setStyles] = useState({});

  const handleClick = (i) => {
    const currentStyles = toStyles(refs, i);

    setStyles(currentStyles);
    app.setIsReady(false);
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

  const classNames = toBlock() + (isReady ? ' ready' : '');

  return (
    <nav className={classNames}>
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
