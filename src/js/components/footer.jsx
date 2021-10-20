import 'on-the-case';
import { useContext, useEffect, useState } from 'react';
import { copyright } from '../../config';
import { BEM } from '../utils';
import Context from './context';
import SocialPlatform from './social-platform';

const { toBlock, toElement, toModifier } = BEM('footer');

const Footer = () => {
  const { data } = useContext(Context);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const classNames = toBlock() + (isReady ? toModifier('ready') : '');

  return (
    <footer className={classNames}>
      <div className={toElement('inner')}>
        {Object.keys(data.socialPlatforms).map((key) => {
          const { type, URL } = data.socialPlatforms[key];

          return (
            <a
              className={toElement('link')}
              href={URL}
              key={type}
              rel="noopener noreferrer"
              target="_blank"
            >
              <SocialPlatform type={type} />
            </a>
          );
        })}
      </div>
      <p className={toElement('statement')}>{copyright.statement}</p>
    </footer>
  );
};

export { Footer as default };
