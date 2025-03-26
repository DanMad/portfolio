import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Button from 'components/button';
import Icon from 'components/icon';
import 'styles/footer';

const links = [
  {
    id: nanoid(),
    type: 'dribbble',
    url: 'https://dribbble.com/danmad',
  },
  {
    id: nanoid(),
    type: 'github',
    url: 'https://github.com/danmad',
  },
  {
    id: nanoid(),
    type: 'linkedin',
    url: 'https://www.linkedin.com/in/daniel-maddisons-profile',
  },
];

function Footer({ year = dayjs().year() }) {
  const handleClick = (url) => {
    window.open(url, '_blank', 'rel=noopener noreferrer');
  };

  return (
    <motion.footer
      className="footer"
      variants={{
        active: {
          opacity: 1,
          transition: {
            duration: 0.3,
            ease: [0.39, 0.575, 0.565, 1],
          },
          y: 0,
        },
        inactive: {
          opacity: 0,
          transition: {
            duration: 0.3,
            ease: [0.47, 0, 0.745, 0.715],
          },
          y: 84,
        },
      }}
    >
      <p className="footer__copyright" element="p">
        Copyright&nbsp;&copy;&nbsp;{year}
        &nbsp;Daniel&nbsp;Maddison. All&nbsp;rights&nbsp;reserved.
      </p>
      <ul className="footer__list">
        {links.map((link) => (
          <li className="footer__item" key={link.id}>
            <Button onClick={() => handleClick(link.url)} type="secondary">
              <Icon type={link.type} />
            </Button>
          </li>
        ))}
      </ul>
    </motion.footer>
  );
}

Footer.displayName = 'Footer';

Footer.propTypes = {
  year: PropTypes.number,
};

export default Footer;
