import { useEffect, useState } from 'react';
import { author, copyrightYear, namespace as ns } from '../../data';
import { BEM, toRange } from '../../utils';
import Icon from '../icon';
import './styles.scss';

const bem = BEM('footer');
const { getBlock, getElement } = bem;

const currentYear = new Date().getFullYear();

const Footer = () => {
  const [state, setState] = useState({ mounted: false });

  useEffect(() => {
    setState({ mounted: true });
  }, []);

  return (
    <footer className={`${getBlock()}${state.mounted ? ` ${ns}-mounted` : ''}`}>
      <ul className={getElement('list')}>
        {Object.keys(author.platforms).map((platform, i) => (
          <li className={getElement('item')} key={i}>
            <a
              className={getElement('link')}
              href={author.platforms[platform]}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon type={platform} />
            </a>
          </li>
        ))}
      </ul>
      <p className={getElement('copyright')}>
        © <span>Copyright</span> {toRange(copyrightYear, currentYear)},{' '}
        {author.name.toTitleCase()}
      </p>
    </footer>
  );
};

export { Footer as default };
