import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import A11yLink from 'components/a11y-link';
import Header from 'components/header';
import Footer from 'components/footer';
import Main from 'components/main';
import { useAnimationContext } from 'context/animation';
import useAnimation from 'hooks/use-animation';
import useScroll from 'hooks/use-scroll';
import useSeo from 'hooks/use-seo';

function Page({ children, title, isIndexed = true }) {
  const { setHasAnimated, setIsAnimating } = useAnimationContext();
  const { scroll } = useScroll();

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

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!location.hash) {
        return;
      }

      const anchorElement = document.querySelector(location.hash);

      if (anchorElement) {
        const anchorStyles = window.getComputedStyle(anchorElement);
        const anchorMarginTop = parseInt(anchorStyles.marginTop, 10) || 0;

        scroll(anchorElement.offsetTop - anchorMarginTop);
      }
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [location]);

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
