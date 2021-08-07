import { author } from '../../data';
import { BEM, toRange } from '../../utils';
import Icon from '../icon';

const { getBlock, getElement } = BEM('footer');
const currentYear = new Date().getFullYear();

const Footer = () => (
  <footer className={getBlock()}>
    <ul className={getElement('list')}>
      {Object.keys(author.social).map((platform, i) => (
        <li className={getElement('item')} key={i}>
          <a
            className={getElement('link')}
            href={author.social[platform]}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon type={platform} />
          </a>
        </li>
      ))}
    </ul>
    <p className={getElement('statement')}>
      © <span className={getElement('copyright')}>Copyright </span>
      {toRange(2021, currentYear)},{' '}
      {`${author.name.first} ${author.name.last}`.toTitleCase()}
    </p>
  </footer>
);

export { Footer as default };
