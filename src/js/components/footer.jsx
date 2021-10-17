import 'on-the-case';
import { useContext, useEffect, useState } from 'react';
import { copyright } from '../../config';
import { BEM } from '../utils';
import Data from './data';
import SocialPlatform from './social-platform';

const { toBlock, toElement, toModifier } = BEM('footer');

const Footer = () => {
  const { socialPlatforms } = useContext(Data);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const classNames = toBlock() + (isReady ? ' ' + toModifier('ready') : '');

  return (
    <footer className={classNames}>
      <div className={toElement('inner')}>
        {Object.keys(socialPlatforms).map((key) => {
          const { type, URL } = socialPlatforms[key];

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
