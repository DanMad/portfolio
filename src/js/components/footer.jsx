import { useContext } from 'react';
import { copyright } from '../../config';
import { BEM } from '../utils';
import Context from './context';
import Icon from './icon';

const { toBlock, toElement } = BEM('footer');

const Footer = () => {
  const { data } = useContext(Context);
  const { social } = data;

  return (
    <footer className={toBlock()}>
      <ul className={toElement('list')}>
        {Object.keys(social).map((platform) => (
          <li className={toElement('item')} key={social[platform].name}>
            <a
              className={toElement('link')}
              href={social[platform].URL}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon type={social[platform].name} />
            </a>
          </li>
        ))}
      </ul>
      <p className={toElement('statement')}>{copyright.statement}</p>
    </footer>
  );
};

export { Footer as default };
