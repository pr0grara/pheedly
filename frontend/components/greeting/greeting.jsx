import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => (
    // <hgroup className='header-group'>
      <nav className='navbar'>
        <Link to='/'><img src="https://s5.feedly.com/images/fx/logos/logo-feedly-full.svg" alt="" /></Link>
        <nav className='login-signup'>
          <Link to='/signup'>get started</Link>
          <Link to='/login'>login</Link>
        </nav>
      </nav>
    //</hgroup>
  );
  const personalGreeting = () => (
   <hgroup className='header-group'>
    <Link to='/'><img src="https://s5.feedly.com/images/fx/logos/logo-feedly-full.svg" alt="" /></Link>
    <button className='logout' onClick={logout}>Logout</button>
   </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;