import React from 'react';
//import image from './mono-lake.png'

class Splash extends React.Component {

  render() {
    return(
      <div className='splash-wrapper'>
        <h1>Welcome to Pheedly</h1>
        <h1>Read smarter not harder</h1>
        <img className='splash-img' src={window.feedly} />
      </div>
    )
  }
}

export default Splash;