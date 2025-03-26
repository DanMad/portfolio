import { motion } from 'framer-motion';
import Nav from 'components/nav';
import { useAnimationContext } from 'context/animation';
import 'styles/header';

function Header() {
  const { hasAnimated } = useAnimationContext();

  return (
    <motion.header
      className="header"
      animate={{
        opacity: 1,
        transition: {
          duration: 0.3,
          ease: [0.39, 0.575, 0.565, 1],
        },
        y: 0,
      }}
      initial={
        !hasAnimated && {
          opacity: 0,
          transition: {
            duration: 0.3,
          },
          y: 84,
        }
      }
    >
      <Nav />
    </motion.header>
  );
}

Header.displayName = 'Header';

export default Header;
