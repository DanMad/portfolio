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
          const { name, URL } = data.social[key];

          return (
            <a
              className={toElement('link')}
              href={URL}
              key={name}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Social name={name} />
            </a>
          );
        })}
      </div>
      <p className={toElement('statement')}>
        {copyright.statement.toTitleCase()}
      </p>
    </footer>
  );
};

export { Footer as default };
