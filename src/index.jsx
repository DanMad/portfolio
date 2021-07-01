import ReactDOM from 'react-dom';
import App from './app';
import { namespace } from './data';

ReactDOM.render(<App />, document.querySelector(`.${namespace}-app`));
