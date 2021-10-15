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
  theme,
  title,
}) => {
  const { isReady, setIsReady } = useContext(Context);

  useEffect(() => {
    setIsReady(true);
    setTheme(theme);
  }, []);

  const classNames = toBlock() + (isReady ? ' ready' : '');

  return (
    <>
      <SEO description={description} title={title} />
      <div className={classNames}>
        <div className={toElement('outer')}>
          <div className={toElement('inner')}>
            <Heading className={toElement('title')}>{title}</Heading>
            <p className={toElement('description')}>{description}</p>
          </div>
        </div>
        <div className={toElement('outer')}>
          <div className={toElement('inner')}>{/* insert image */}</div>
        </div>
      </div>
    </>
  );
};

Slide.propTypes = {
  // content: PropTypes.string,
  description: PropTypes.string.isRequired,
  // image: PropTypes.string,
  theme: PropTypes.shape({
    accent: PropTypes.string.isRequired,
    backgroundPrimary: PropTypes.string.isRequired,
    backgroundSecondary: PropTypes.string.isRequired,
    backgroundTertiary: PropTypes.string.isRequired,
    lighting: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
};

Slide.defaultProps = {
  theme,
};

export { Slide as default };
