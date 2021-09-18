import { BEM } from '../../utils';
import SVG from '../svg';

const { toBlock, toElement, toModifier } = BEM('icon');

const StackOverflow = (props) => (
  <SVG
    className={`${toBlock()} ${toModifier('stack-overflow')}`}
    height={props.size}
    width={props.size}
  >
    <path
      className={toElement('path')}
      d="M19.839 15.47h2.132V24H2.78v-8.53h2.132v6.398H19.84V15.47z"
    />
    <path
      className={toElement('path')}
      d="m7.236 14.837 10.473 2.2.44-2.093-10.473-2.202-.44 2.095zm1.386-5.015 9.701 4.518.904-1.94-9.701-4.518-.904 1.94zm2.684-4.76 8.225 6.85 1.37-1.645-8.225-6.85-1.37 1.646zM16.616 0l-1.718 1.277 6.387 8.588 1.717-1.277L16.615 0zM7.044 19.735h10.661v-2.132H7.045v2.132z"
    />
  </SVG>
);

export { StackOverflow as default };
