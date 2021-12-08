import ReactDom from "react-dom";

import 'normalize.css';
import './styles/index.css';
import './styles/animations.css';

import App from './App';

ReactDom.render(
    <App />,
    document.getElementById('app')
)