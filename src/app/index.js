import ReactDom from "react-dom";
import ReactModal from 'react-modal';

import 'normalize.css';
import './styles/index.css';
import './styles/rules.css';
import './styles/animations.css';

import App from './App';

const app = document.getElementById('app');

ReactModal.setAppElement(app);

ReactDom.render(<App />, app);