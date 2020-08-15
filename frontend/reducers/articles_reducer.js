import { RECEIVE_ARTICLES, RECEIVE_CONTENT } from '../actions/article_actions';

const articlesReducer = (state = {}, action) => {
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
