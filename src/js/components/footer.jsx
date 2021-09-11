import Icon from './icon';
import { BEM } from '../utils';
import { copyright, social } from '../../config';

const { block, element } = BEM('footer');
const Footer = () => (
  <footer className={block()}>
    <ul className={element('list')}>
      {Object.keys(social).map((platform) => (
        <li className={element('item')} key={platform}>
          <a
            className={element('link')}
            href={social[platform]}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon type={platform} />
          </a>
        </li>
      ))}
    </ul>
    <p className={element('statement')}>{copyright.statement}</p>
  </footer>
);

export { Footer as default };
