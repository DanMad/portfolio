import 'on-the-case';
import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { theme } from '../../config';
import { BEM, setTheme } from '../utils';
import Context from './context';
import Heading from './heading';
import SEO from './seo';

const { toBlock, toElement } = BEM('slide');

const Slide = ({
  // content,
  description,
  // image,
  name,
  theme,
}) => {
  const { isReady, setIsReady } = useContext(Context);

  useEffect(() => {
    setIsReady(true);
    setTheme(theme);
  }, []);

  const classNames = toBlock() + (isReady ? ' ready' : '');

  return (
    <>
      <SEO title={name} />
      <div className={classNames}>
        <div className={toElement('inner')}>
          <Heading className={toElement('name')}>{name}</Heading>
          <p className={toElement('description')}>{description}</p>
        </div>
        <div className={toElement('inner')}>{/* insert image */}</div>
      </div>
    </>
  );
};

Slide.propTypes = {
  // content: PropTypes.string,
  description: PropTypes.string.isRequired,
  // image: PropTypes.string,
  name: PropTypes.string.isRequired,
  theme: PropTypes.shape({
    accent: PropTypes.string.isRequired,
    backgroundPrimary: PropTypes.string.isRequired,
    backgroundSecondary: PropTypes.string.isRequired,
    backgroundTertiary: PropTypes.string.isRequired,
    lighting: PropTypes.string.isRequired,
  }),
};

Slide.defaultProps = {
  theme,
};

export { Slide as default };
