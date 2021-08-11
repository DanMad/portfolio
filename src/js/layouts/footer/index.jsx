import PropTypes from 'prop-types';
import { BEM, toRange } from '../../utils';
import Icon from '../../components/icon';

const { getBlock, getElement } = BEM('footer');
const currentYear = new Date().getFullYear();

const Footer = ({ author, created }) => (
  <footer className={getBlock()}>
    <ul className={getElement('list')}>
      {Object.keys(author.social).map((platform) => (
        <li className={getElement('item')} key={platform}>
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
      {toRange(new Date(...created).getFullYear(), currentYear)},{' '}
      {`${author.name.first} ${author.name.last}`.toTitleCase()}
    </p>
  </footer>
);

Footer.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    social: PropTypes.shape({
      linkedin: PropTypes.string,
      dribbble: PropTypes.string,
      github: PropTypes.string,
      stackOverflow: PropTypes.string,
    }),
  }),
  created: PropTypes.arrayOf(PropTypes.number),
};

export { Footer as default };
