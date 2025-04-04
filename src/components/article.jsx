import { motion } from 'framer-motion';
import toVariant from 'helpers/to-variant';
import 'styles/article';

function Article({ children }) {
  const variants = {
    animate: toVariant('animate'),
    exit: toVariant('exit'),
    initial: toVariant('initial'),
  };

  return (
    <motion.article className="article" variants={variants}>
      {children}
    </motion.article>
  );
}

Article.displayName = 'Article';

export default Article;
