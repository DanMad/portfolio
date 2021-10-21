import PropTypes from 'prop-types';
import { useContext, useEffect } from 'react';
import { theme } from '../../config';
import { BEM, setTheme } from '../utils';
import Context from './context';
import Button from './button';
import Heading from './heading';
import SEO from './seo';

const { toBlock, toElement, toModifier } = BEM('slide');

const Slide = ({
  // content,
  description,
  // image,
  theme,
  title,
}) => {
  const { app } = useContext(Context);

  useEffect(() => {
    app.setIsReady(true);
    setTheme(theme);
  }, []);

  const classNames = toBlock() + (app.isReady ? toModifier('ready') : '');

  return (
    <>
      <SEO description={description} title={title} />
      <div className={classNames}>
        <div className={toElement('outer')}>
          <div className={toElement('inner')}>{/* insert image */}</div>
        </div>
        <div className={toElement('outer')}>
          <div className={toElement('inner')}>
            <Heading className={toElement('title')}>{title}</Heading>
            <p className={toElement('description')}>{description}</p>
            <Button className={toElement('button')}>view more</Button>
          </div>
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
