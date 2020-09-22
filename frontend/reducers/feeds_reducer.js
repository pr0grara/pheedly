import { RECEIVE_FEEDS } from '../actions/feed_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

var previousState = {};
if (Boolean(localStorage.feeds)) {
  previousState = Object.freeze({ ...JSON.parse(localStorage.feeds) });
}

const feedsReducer = (state = previousState, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEEDS:
      return { feeds: action.pheeds };
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default feedsReducer;
