import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import './index.css';
import routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import { loadCharacters } from './actions/loadCharacters';
import configureStore from './store';

const initialState = {
};

const store = configureStore(initialState);

store.dispatch(loadCharacters(25));

const root = (
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
