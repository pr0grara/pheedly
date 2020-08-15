import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './loading';

const mSTP = state => {
  // debugger
  return {
    user: state.entities.users[state.session.id],
  };
}

const mDTP = dispatch => {
  // debugger
  return {
  };
};

export default connect(mSTP, mDTP)(Loading);