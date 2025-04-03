import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import useVariants from 'hooks/use-variants';
import 'styles/article';

function Article({ children }) {
  const { animate, exit, initial } = useVariants();

  return (
    <motion.article
      className="article"
      variants={{
        animate: animate(),
        exit: exit(),
        initial: initial(),
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
