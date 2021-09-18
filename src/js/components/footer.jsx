import Icon from './icon';
import { BEM } from '../utils';
import { copyright, social } from '../../config';

const { toBlock, toElement } = BEM('footer');
const Footer = () => (
  <footer className={toBlock()}>
    <ul className={toElement('list')}>
      {Object.keys(social).map((platform) => (
        <li className={toElement('item')} key={platform}>
          <a
            className={toElement('link')}
            href={social[platform]}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon type={platform} />
          </a>
        </li>
      ))}
    </ul>
    <p className={toElement('statement')}>{copyright.statement}</p>
  </footer>
);

export { Footer as default };
