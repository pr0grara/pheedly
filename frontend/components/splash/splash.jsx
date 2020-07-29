import React from 'react';
//import image from './mono-lake.png'

class Splash extends React.Component {

  constructor (props) {
    super(props)
  }

  render() {
    let className = "splash-wrapper"
    // debugger
    if (!!this.props.currentUser) {
      className = "splash-wrapper-hidden"
    }
    return(
      <div className={className}>
        <h1>Welcome to Pheedly</h1>
        <h1>Read smarter not harder</h1>
        <img className='splash-img' src={window.feedly} />
      </div>
    )
  }
}

export default Splash;