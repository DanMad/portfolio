import 'on-the-case';
import name from '../name';
import toRange from './to-range';

const date = '2021-07-02';
const holder = name.full.toTitleCase();

const copyright = {
  date,
  holder,
  get statement() {
    const copyrightYear = new Date(this.date).getFullYear();
    const currentYear = new Date().getFullYear();

    return `© Copyright ${holder}, ${toRange(copyrightYear, currentYear)}`;
  },
};

export { copyright as default };
