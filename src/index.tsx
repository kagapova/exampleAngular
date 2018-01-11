import 'bootstrap/dist/css/bootstrap.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/pages/App';
import registerServiceWorker from './registerServiceWorker';
import './res/syles/index.css';

const Provider = require('react-redux').Provider;
let store = require('redux').createStore(() => {
});

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
