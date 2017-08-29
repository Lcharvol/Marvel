import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { loadCharacters } from './actions/loadCharacters';
import configureStore from './store';

const initialState = {
};

const store = configureStore(initialState);

store.dispatch(loadCharacters(25));

const root = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
