import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Screen from './Screen'
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Screen />, document.getElementById('root'));
registerServiceWorker();