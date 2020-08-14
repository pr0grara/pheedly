import React from 'react';
import { Link } from 'react-router-dom';
import ArticleIndexContainer from '../articles/article_index_container'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.currentUser = this.props.currentUser;
  }

  render() {
    // debugger
    return (!!this.currentUser ? <div className='user-main'><ArticleIndexContainer /></div> : <div></div>)
    }
}

export default Home;