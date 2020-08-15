import { RECEIVE_FEEDS } from '../actions/feed_actions'

const feedsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEEDS:
      return Object.assign({}, state, { [action.feeds.name]: [action.feeds.code] });
    default:
      return state;
  }
};

export default feedsReducer;
