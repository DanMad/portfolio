import 'on-the-case';
import { useContext } from 'react';
import { copyright } from '../../config';
import { BEM } from '../utils';
import Context from './context';
import Social from './social';

const { toBlock, toElement } = BEM('footer');

const Footer = () => {
  const { data } = useContext(Context);

  return (
    <footer className={toBlock()}>
      <div className={toElement('inner')}>
        {Object.keys(data.social).map((key) => {
          const { type, URL } = data.social[key];

          return (
            <a
              className={toElement('link')}
              href={URL}
              key={type}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Social type={type} />
            </a>
          );
        })}
      </div>
      <p className={toElement('statement')}>{copyright.statement}</p>
    </footer>
  );
};

export { Footer as default };
