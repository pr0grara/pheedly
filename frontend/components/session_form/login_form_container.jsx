import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({ errors }) => {
  // debugger
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mDTP = dispatch => {
  //debugger
  return {
    addSources: (user) => dispatch(addSourcesToState(user)),
    processForm: (user) => dispatch(login(user)),
    clearErrors: clearErrors(),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
