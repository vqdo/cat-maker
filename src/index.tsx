import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { StoreState } from '@store/index';
import { cats } from '@store/cat/reducers';
import { CatsAction } from '@store/cat/actions';
import App from './App';
import './index.scss';
import registerServiceWorker from './registerServiceWorker';

const store = createStore<StoreState, CatsAction, any, any>(cats, { cats: [] });
store.subscribe(() => console.log('Current state', store.getState()));

ReactDOM.render(
  (<Provider store={store}>
    <App></App>
  </Provider>),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
