import React from 'react';
//import image from './mono-lake.png'

class Splash extends React.Component {

  render() {
    return(
      <div className='splash-wrapper'>
        <img className='splash-img' src={window.monoURL} />
      </div>
    )
  }
}

export default Splash;