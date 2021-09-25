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
      <ul className={toElement('list')}>
        {Object.keys(social).map((key) => {
          const { name, URL } = social[key];

          return (
            <li className={toElement('item')} key={name}>
              <a
                className={toElement('link')}
                href={URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Social name={name} />
              </a>
            </li>
          );
        })}
      </ul>
      <p className={toElement('statement')}>{statement}</p>
    </footer>
  );
};

export { Footer as default };
