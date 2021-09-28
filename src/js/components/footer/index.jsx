import { useContext } from 'react';
import { copyright } from '../../../config';
import { BEM } from '../../utils';
import Context from '../context';
import Social from './social';

const { statement } = copyright;
const { toBlock, toElement } = BEM('footer');

const Footer = () => {
  const { data } = useContext(Context);
  const { social } = data;

  return (
    <footer className={toBlock()}>
      <div className={toElement('inner')}>
        {Object.keys(social).map((key) => {
          const { name, URL } = social[key];

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
      <p className={toElement('statement')}>{statement}</p>
    </footer>
  );
};

export { Footer as default };
