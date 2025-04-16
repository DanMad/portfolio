import { motion } from 'framer-motion';
import throttle from 'lodash/throttle';
import { useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router';
import A11yLink from 'components/a11y-link';
import Header from 'components/header';
import Footer from 'components/footer';
import Main from 'components/main';
import Context from 'context';
import scrollTo from 'helpers/scroll-to';
import { useIsAnimating } from 'hooks';

function Page({ children, title, isIndexed = true }) {
  const { shouldHeaderAnimate, setShouldHeaderAnimate } = useContext(Context);
  const { setIsAnimating } = useIsAnimating();
  const { hash } = useLocation();
  const headerRef = useRef(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const rootElement = document.querySelector('#root');

    if (!rootElement) {
      return;
    }

    const handleScroll = throttle(() => {
      if (!headerRef.current) {
        return;
      }

      const { top, height } = headerRef.current.getBoundingClientRect();
      setHasScrolled(top + height < 0);
    }, 100);

    rootElement.addEventListener('scroll', handleScroll);

    return () => {
      rootElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!hash) {
        return;
      }

      const anchorElement = document.querySelector(hash);

      if (!anchorElement) {
        return;
      }

      const anchorStyles = window.getComputedStyle(anchorElement);
      const anchorMarginTop = parseInt(anchorStyles.marginTop, 10) || 0;

      scrollTo({ top: anchorElement.offsetTop - anchorMarginTop });
    }, 600);

    return () => {
      clearTimeout(timeout);
    };
  }, [hash]);

  useEffect(() => {
    const url = window.location.href;
    let canonicalElement = document.querySelector('link[rel="canonical"]');
    let ogTitleElement = document.querySelector('meta[property="og:title"]');
    let ogUrlElement = document.querySelector('meta[property="og:url"]');
    let robotsElement = document.querySelector('meta[name="robots"]');

    document.title = `${title} | Daniel Maddison’s Portfolio`;

    if (isIndexed) {
      if (!canonicalElement) {
        canonicalElement = document.createElement('link');
        canonicalElement.rel = 'canonical';
        document.head.appendChild(canonicalElement);
      }

      canonicalElement.href = url;
    } else {
      canonicalElement?.remove();
    }

    if (!robotsElement) {
      robotsElement = document.createElement('meta');
      robotsElement.name = 'robots';
      document.head.appendChild(robotsElement);
    }

    robotsElement.content = isIndexed ? 'index, follow' : 'noindex, nofollow';

    if (!ogTitleElement) {
      ogTitleElement = document.createElement('meta');
      ogTitleElement.property = 'og:title';
      document.head.appendChild(ogTitleElement);
    }

    ogTitleElement.content = document.title;

    if (!ogUrlElement) {
      ogUrlElement = document.createElement('meta');
      ogUrlElement.property = 'og:url';
      document.head.appendChild(ogUrlElement);
    }

    ogUrlElement.content = url;
  }, [isIndexed, title]);

  const handleAnimationComplete = (variant) => {
    if (variant === 'animate') {
      setIsAnimating(false);
      setShouldHeaderAnimate(false);
    }
  };

  const handleAnimationStart = (variant) => {
    if (variant === 'animate') {
      if (shouldHeaderAnimate) {
        scrollTo({ top: 0 }, 'auto');
      }
    } else if (variant === 'exit') {
      setIsAnimating(true);
      setShouldHeaderAnimate(hasScrolled);
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
      <Header ref={headerRef} />
      <Main>{children}</Main>
      <Footer />
    </motion.div>
  );
}

if (process.env.NODE_ENV !== 'production') {
  Page.displayName = 'Page';
}

export default Page;
