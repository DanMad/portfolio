import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import A11yLink from 'components/a11y-link';
import Header from 'components/header';
import Footer from 'components/footer';
import Main from 'components/main';
import { useAnimationContext } from 'context/animation';
import useAnimation from 'hooks/use-animation';
import useSeo from 'hooks/use-seo';

function Page({ children, title, isIndexed = true }) {
  const { setHasAnimated, setIsAnimating } = useAnimationContext();

  useAnimation();
  useSeo({
    isIndexed,
    title: `${title} | Daniel Maddison’s Portfolio`,
  });

  const handleAnimationComplete = (variant) => {
    if (variant === 'active') {
      setHasAnimated(true);
      setIsAnimating(false);
    }
  };

  const handleAnimationStart = (variant) => {
    if (variant === 'inactive') {
      setIsAnimating(true);
    }
  };

  return (
    <motion.div
      animate="active"
      exit="inactive"
      initial="inactive"
      onAnimationComplete={handleAnimationComplete}
      onAnimationStart={handleAnimationStart}
      variants={{
        active: {
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1,
            staggerDirection: 1,
            when: 'beforeChildren',
          },
        },
        inactive: {
          transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
            when: 'afterChildren',
          },
        },
      }}
    >
      <A11yLink />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </motion.div>
  );
}

Page.displayName = 'Page';

Main.propTypes = {
  children: PropTypes.node.isRequired,
  isIndexed: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Page;
