import { RECEIVE_ARTICLES, RECEIVE_CONTENT } from '../actions/article_actions';

var previousState = {};
if (Boolean(localStorage.articles)) {
  previousState = {...JSON.parse(localStorage.articles)}
}

const articlesReducer = (state = previousState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, action.articles);
    case RECEIVE_CONTENT:
      return Object.assign({}, state, action.article)
    default:
      return state;
  }
};

export default articlesReducer;
