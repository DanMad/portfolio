import PropTypes from 'prop-types';
import { BEM, toRange } from '../../utils';
import Icon from '../../components/icon';

const { getBlock, getElement } = BEM('footer');
const currentYear = new Date().getFullYear();

const Footer = (props) => (
  <footer className={getBlock()}>
    <ul className={getElement('list')}>
      {Object.keys(props.author.social).map((platform) => (
        <li className={getElement('item')} key={platform}>
          <a
            className={getElement('link')}
            href={props.author.social[platform]}
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
      {toRange(new Date(props.created).getFullYear(), currentYear)},{' '}
      {`${props.author.name.first} ${props.author.name.last}`.toTitleCase()}
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
    }),
  }).isRequired,
  created: PropTypes.string.isRequired,
};

export { Footer as default };
