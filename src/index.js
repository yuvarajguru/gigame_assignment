import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from "./Store/store";
import * as serviceWorker from './serviceWorker';
import "antd/dist/antd.css";

const app =(
    <Provider store={store}>
    <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));


serviceWorker.unregister();
