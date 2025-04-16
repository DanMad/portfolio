import { motion } from 'framer-motion';
import { useContext } from 'react';
import Nav from 'components/nav';
import Context from 'context';
import toVariant from 'helpers/to-variant';
import 'styles/header';

function Header({ ref }) {
  const { shouldHeaderAnimate } = useContext(Context);

  const animate = toVariant('animate');
  const initial = toVariant('initial');

  return (
    <motion.header
      animate={shouldHeaderAnimate && animate}
      className="header"
      initial={shouldHeaderAnimate && initial}
      ref={ref}
    >
      <Nav />
    </motion.header>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Header.displayName = 'Header';
}

export default Header;
