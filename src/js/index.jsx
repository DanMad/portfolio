import ReactDOM from 'react-dom';
import App from './app';
import { namespace as ns } from '../config';

ReactDOM.render(<App />, document.querySelector(`.${ns}-app`));
