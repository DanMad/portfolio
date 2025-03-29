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

  useSeo({
    isIndexed,
    title: `${title} | Daniel Maddison’s Portfolio`,
  });

  useAnimation();

  const handleAnimationComplete = (variant) => {
    if (variant === 'animate') {
      setHasAnimated(true);
      setIsAnimating(false);
    }
  };

  const handleAnimationStart = (variant) => {
    if (variant === 'exit') {
      setIsAnimating(true);
    }
  };

  return (
    <motion.div
      animate="animate"
      exit="exit"
      initial="initial"
      onAnimationComplete={handleAnimationComplete}
      onAnimationStart={handleAnimationStart}
      variants={{
        animate: {
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.1,
            staggerDirection: 1,
            when: 'beforeChildren',
          },
        },
        exit: {
          transition: {
            staggerChildren: 0.1,
            staggerDirection: -1,
            when: 'afterChildren',
          },
        },
        initial: {
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

Page.propTypes = {
  children: PropTypes.node.isRequired,
  isIndexed: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

export default Page;
