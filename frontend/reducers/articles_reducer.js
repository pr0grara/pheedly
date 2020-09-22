import { RECEIVE_ARTICLES, RECEIVE_CONTENT } from '../actions/article_actions';
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

var previousState = {};
if (Boolean(localStorage.articles)) {
  previousState = Object.freeze({...JSON.parse(localStorage.articles)})
}

const articlesReducer = (state = previousState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, action.articles);
    case RECEIVE_CONTENT:
      return Object.assign({}, state, action.article);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default articlesReducer;
