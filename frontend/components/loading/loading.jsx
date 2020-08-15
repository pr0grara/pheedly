import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Loading extends React.Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // debugger
  }

  render() {
    const currentUser = !!this.props.user;
    // debugger
    return currentUser ? <Redirect to='/home' /> : <div>loading</div>
  }
}

export default Loading;