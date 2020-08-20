import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app'


const Root = ({ store }) => {
  // let root = document.getElementById('root')
  // root.style.width = `${window.innerWidth}px`  
  // // root.style.height = `${window.innerHeight}px`  
  // root.style.height = `${document.documentElement.scrollHeight}px`  
  return (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  )
};

export default Root;