import React from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import { ArticleIndexContainer } from '../articles/article_index_container'
//import image from './mono-lake.png'

class Splash extends React.Component {

  constructor (props) {
    super(props)
  }

  componentWillMount() {
    // debugger
    if (!!this.props.currentUser) {
      // this.props.addSourcesToState(this.props.currentUser)
    }
  }

  componentWillUpdate() {
    // var history = useHistory();
    // debugger
    // return (
      <Redirect to='/articles' />
      // <div>hellooooooo</div>
      // )
    }
    
    componentDidUpdate() {
      // debugger
      // <Redirect to='/articles' />
      // window.location.reload();
  }

  componentWillUnmount() {
    // debugger
    // window.location.reload();
  }

  render() {
    // let className = "splash-wrapper"
    // // debugger
    // if (!!this.props.currentUser) {
    //   className = "splash-wrapper-hidden"
    // } 
    // return(
    //   <div className={className}>
    //     <h1>Welcome to Pheedly</h1>
    //     <h1>Read smarter not harder</h1>
    //     <img className='splash-img' src={window.feedly} />
    //   </div>
    // )
    // debugger
    let splash = (
      <div className='splash-wrapper'>
         <h1>Welcome to Pheedly</h1>
         <h1>Read smarter not harder</h1>
         <img className='splash-img' src={window.feedly} />
      </div>
    )
    return !!this.props.currentUser ? <Redirect to='/home' /> : splash
    // return !!this.props.currentUser ? <div>hello</div> : splash
    // return !!this.props.currentUser ? <ArticleIndexContainer /> : splash
  }
}

export default Splash;