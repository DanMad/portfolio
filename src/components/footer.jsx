import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';
import Button from 'components/button';
import Icon from 'components/icon';
import toVariant from 'helpers/to-variant';
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
    url: 'https://www.linkedin.com/in/danmad',
  },
];

function Footer() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  const variants = {
    animate: toVariant('animate'),
    exit: toVariant('exit'),
    initial: toVariant('initial'),
  };

  const year = dayjs().year();

  return (
    <motion.footer className="footer" variants={variants}>
      <p className="footer__copyright" element="p">
        Copyright&nbsp;&copy;&nbsp;{year}
        &nbsp;Daniel&nbsp;Maddison. All&nbsp;rights&nbsp;reserved.
      </p>
      <ul className="footer__list">
        {links.map(({ id, type, url }) => (
          <li className="footer__item" key={id}>
            <Button onClick={() => handleClick(url)} type="secondary">
              <Icon type={type} />
            </Button>
          </li>
        ))}
      </ul>
    </motion.footer>
  );
}

Footer.displayName = 'Footer';

export default Footer;
