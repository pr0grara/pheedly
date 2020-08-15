import React from 'react';
import { Redirect } from 'react-router-dom';

class Loading extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const currentUser = !!this.props.user;
    return currentUser ? <Redirect to='/home' /> : <div>loading</div>
  }
}

export default Loading;