import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({currentUser, logout}) => {
  const sessionLinks = () => (
    <nav className='login-signup'>
      <img src="https://s5.feedly.com/images/fx/logos/logo-feedly-full.svg" alt="" />
      <Link to='/signup'>get started</Link>
      <Link to='/login'>login</Link>
    </nav>
  );
  const personalGreeting = () => (
   <hgroup className='header-group'>
     <h2 className='header-name'>Hey, {currentUser.email}!</h2>
     <button className='header-button' onClick={logout}>Logout</button>
   </hgroup>
  );
  return currentUser ? personalGreeting() : sessionLinks();
}

export default Greeting;