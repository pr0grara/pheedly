import { RECEIVE_ARTICLES } from '../actions/article_actions';

const sessionReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      return Object.assign({}, state, action.articles);
    default:
      return state;
  }
};

export default sessionReducer;
