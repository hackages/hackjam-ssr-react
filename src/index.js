import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {reducers} from './redux-client/redux/reducers';

import {App} from './redux-client/App';

// Grab the state from a global variable injected into the server-generated HTML
const preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

// Create Redux store with initial state
let store = createStore(reducers, preloadedState);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
