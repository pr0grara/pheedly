import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Home from './home';

const mSTP = (state) => {
  // debugger
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = dispatch => {
  return {
  };
};

export default connect(mSTP, mDTP)(Home);
