import React from 'react';
import { Redirect } from 'react-router-dom';

class Splash extends React.Component {

  constructor (props) {
    super(props)
  }
    
  componentDidUpdate() {
    if (Boolean(localStorage.articles)) window.location.reload();
  }

  render() {
    let splash = (
      <div className='splash-wrapper'>
         <h1>Welcome to Pheedly</h1>
         <h1>Read smarter not harder</h1>
         <img className='splash-img' src={window.feedly} />
      </div>
    )
    return !!this.props.currentUser ? <Redirect to='/home' /> : splash
    // return !!this.props.currentUser ? splash : splash
  }
}

export default Splash;