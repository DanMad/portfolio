import PropTypes from 'prop-types';
import { BEM, toRange } from '../../utils';
import Icon from '../../components/icon';

const { block, element } = BEM('footer');

const Footer = ({ copyrightDate, name, social }) => (
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
      , {name.toTitleCase()}
    </p>
  </footer>
);

Footer.propTypes = {
  copyrightDate: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  //   author: PropTypes.shape({
  //     name: PropTypes.shape({
  //       first: PropTypes.string,
  //       last: PropTypes.string,
  //     }),
  //     social: PropTypes.shape({
  //       linkedin: PropTypes.string,
  //       dribbble: PropTypes.string,
  //       github: PropTypes.string,
  //     }),
  //   }).isRequired,
};

export { Footer as default };
