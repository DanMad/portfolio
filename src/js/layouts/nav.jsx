import { useEffect, useRef, useState } from 'react';
import DelayedNavLink from '../components/delayed-nav-link';
import { BEM } from '../utils';
import { pages } from '../../config';

const { block, element } = BEM('nav');

const Nav = () => {
  const refs = useRef([]);
  const [underlineLeft, setUnderlineLeft] = useState();
  const [underlineWidth, setUnderlineWidth] = useState();

  const handleClick = (activeLinkIndex) => {
    let left = 0;

    for (let i = 0; i <= activeLinkIndex; i++) {
      if (i !== activeLinkIndex) {
        left += refs.current[i].offsetWidth + 24;
      } else {
        left += refs.current[i].offsetWidth / 2;
      }
    }

    setUnderlineLeft(left);
    setUnderlineWidth(refs.current[activeLinkIndex].offsetWidth);
  };

  useEffect(() => {
    const activeLinkIndex = refs.current.findIndex((ref) =>
      ref.className.includes('active'),
    );

    let left = 0;

    for (let i = 0; i <= activeLinkIndex; i++) {
      if (i !== activeLinkIndex) {
        left += refs.current[i].offsetWidth + 24;
      } else {
        left += refs.current[i].offsetWidth / 2;
      }
    }

    setUnderlineLeft(left);
    setUnderlineWidth(refs.current[activeLinkIndex].offsetWidth);
  }, []);

  return (
    <nav className={block()}>
      <div className={element('inner')}>
        {pages.map((page, i) => (
          <DelayedNavLink
            activeClassName="active"
            className={element('link')}
            exact
            key={page}
            onClick={() => handleClick(i)}
            innerRef={(ref) => (refs.current[i] = ref)}
            to={'/' + page.toKebabCase()}
          >
            {page.toTitleCase()}
          </DelayedNavLink>
        ))}
        <div
          className={element('underline')}
          style={{
            left: underlineLeft,
            width: underlineWidth,
          }}
        />
      </div>
    </nav>
  );
};

export { Nav as default };
