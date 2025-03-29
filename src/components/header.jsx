import { motion } from 'framer-motion';
import Nav from 'components/nav';
import { useAnimationContext } from 'context/animation';
import useVariants from 'hooks/use-variants';
import 'styles/header';

function Header() {
  const { hasAnimated } = useAnimationContext();
  const { animate, initial } = useVariants();

  return (
    <motion.header
      className="header"
      animate={animate()}
      initial={!hasAnimated && initial()}
    >
      <Nav />
    </motion.header>
  );
}

Header.displayName = 'Header';

export default Header;
