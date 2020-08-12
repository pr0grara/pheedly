import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app'


const Root = ({ store }) => {
  let root = document.getElementById('root')
  // root.style.height = `${window.screen.availHeight}px`
  // root.style.width = `${window.screen.availWidth}px`  
  root.style.width = `${window.innerWidth}px`  
  root.style.height = `${window.innerHeight}px`  
  return (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  )
};

export default Root;