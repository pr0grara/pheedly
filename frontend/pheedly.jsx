import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import Root from './components/root';


document.addEventListener('DOMContentLoaded', () => {
  console.log(window.gnews)
  let store 
  let preloadedState = {
    session: {
      windowSize: {
        height: window.innerHeight,
        width: window.innerWidth,
      }
    }
  };
  if (window.currentUser) {
    preloadedState = {
      session: { 
        id: window.currentUser.id,
        windowSize: {
          height: window.innerHeight,
          width: window.innerWidth,
        },
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore(preloadedState);
  }
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})