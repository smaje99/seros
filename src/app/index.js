import { hydrate, render} from "react-dom";
import ReactModal from 'react-modal';

import 'normalize.css';
import './styles/index.css';
import './styles/rules.css';
import './styles/animations.css';
import './styles/laptop.css';

import App from './App';

const app = document.getElementById('app');

ReactModal.setAppElement(app);

if(app.hasChildNodes()) {
    hydrate(<App />, app);
} else {
    render(<App />, app);
}