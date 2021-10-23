import PropTypes from 'prop-types';
import { useContext, useEffect, useRef, useState } from 'react';
import { theme } from '../../../config';
import { useEventListener } from '../../hooks';
import { BEM, setTheme } from '../../utils';
import Context from '../context';
import Button from '../button';
import Heading from '../heading';
import SEO from '../seo';
import toOrientation from './to-orientation';

const { toBlock, toElement } = BEM('slide');

const Slide = ({
  // content,
  description,
  // image,
  theme,
  title,
}) => {
  const { app } = useContext(Context);
  const ref = useRef();
  const [orientation, setOrientation] = useState();

  useEffect(() => {
    const currentOrientation = toOrientation(ref);

    setOrientation(currentOrientation);
    setTheme(theme);
    app.setIsReady(true);
  }, []);

  useEventListener('resize', () => {
    const currentOrientation = toOrientation(ref);

    if (currentOrientation !== orientation) {
      setOrientation(currentOrientation);
    }
  });

  const classNames = toBlock() + (orientation ? ' ' + orientation : '');

  return (
    <>
      <SEO description={description} title={title} />
      <div className={classNames} ref={ref}>
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
