import ReactDOM from 'react-dom';
import App from './components/app';
import { namespace as ns } from './data';

ReactDOM.render(<App />, document.querySelector(`.${ns}-app`));
