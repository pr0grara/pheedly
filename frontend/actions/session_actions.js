import * as APIUtil from '../util/session_api_util'
import { addSourcesToState } from '../actions/source_actions'
import { addPheedsToState } from '../actions/pheed_actions'
import { curryArticles } from '../actions/article_actions'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = currentUser => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  }
};

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => {
  return {
  type: RECEIVE_SESSION_ERRORS,
  errors
  }
};

export const clearErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS,
    errors: []
  }
}

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => {
  if (Boolean(localStorage.articles) && Date.now() - JSON.parse(localStorage.articles).time > 1800000) {
    localStorage.removeItem('articles')
  }
  return (  
    APIUtil.login(user).then(user => {
      dispatch(receiveCurrentUser(user))
      debugger
      dispatch(addSourcesToState(user))
      dispatch(addPheedsToState(user))
    }, err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  )
};

export const logout = () => dispatch => (
  APIUtil.logout().then(user => {
    localStorage.removeItem('sources')
    if (Date.now() - JSON.parse(localStorage.articles).time > 1800000) {
     localStorage.removeItem('articles')
    }
    dispatch(logoutCurrentUser())
  })
);
