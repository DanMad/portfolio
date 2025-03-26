import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import 'styles/article.scss';

function Article({ children }) {
  return (
    <motion.article
      className="article"
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
      {children}
    </motion.article>
  );
}

Article.displayName = 'Article';

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
