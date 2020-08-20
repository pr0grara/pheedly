import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component { 
  constructor(props) {
    super(props);
    this.logout = this.props.logout.bind(this);
  }
  render () {
    let personalGreeting = (
    <>
      <hgroup className='header-group'>
        <div id='header-items-container'>
          <div id='header-items'>
            <button className='header-upgrade-button' onClick={this.logout}>Upgrade</button>
          </div>
        </div>  
      </hgroup>
    </>
    )
    let sessionLinks = (
       <nav className='navbar'>
         <Link to='/'><img src="https://s5.feedly.com/images/fx/logos/logo-feedly-full.svg" alt="" /></Link>
         <nav className='login-signup'>
           <Link to='/signup'>get started</Link>
           <Link to='/login'>login</Link>
         </nav>
       </nav>
    )
    return this.props.currentUser ? personalGreeting : sessionLinks
  }
}

export default Greeting;