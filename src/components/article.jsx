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

if (process.env.NODE_ENV !== 'production') {
  Article.displayName = 'Article';
}

export default Article;
