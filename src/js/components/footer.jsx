import 'on-the-case';
import { useContext } from 'react';
import { copyright } from '../../config';
import { BEM } from '../utils';
import Context from './context';
import SocialPlatform from './social-platform';

const { toBlock, toElement } = BEM('footer');

const Footer = () => {
  const { data } = useContext(Context);

  return (
    <footer className={toBlock()}>
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
