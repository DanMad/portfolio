import 'on-the-case';
import toRange from '../js/utils/to-range';
import name from './name';

const date = '2021-07-02';
const holder = name.full;

const copyright = {
  date,
  holder,
  get statement() {
    const copyrightYear = new Date(this.date).getFullYear();
    const currentYear = new Date().getFullYear();

    return (
      `© Copyright ${holder.toTitleCase()} ` +
      toRange(copyrightYear, currentYear)
    );
  },
};

export { copyright as default };
