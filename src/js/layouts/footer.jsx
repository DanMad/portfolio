import Icon from '../components/icon';
import { BEM, toRange } from '../utils';
import { copyrightDate, name, social } from '../../config';

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
    <p className={element('statement')}>
      © <span className={element('copyright')}>Copyright </span>
      {toRange(new Date(copyrightDate).getFullYear(), new Date().getFullYear())}
      , {name.full.toTitleCase()}
    </p>
  </footer>
);

export { Footer as default };
