import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';
import { fetch } from './util/article_api_util'

document.addEventListener('DOMContentLoaded', () => {
  console.log(window.gnews)
  let store 
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.fetch = fetch;
  //debugger
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})