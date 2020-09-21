import { RECEIVE_FEEDS } from '../actions/feed_actions'

var previousState = {};
if (Boolean(localStorage.feeds)) {
  previousState = Object.freeze({ ...JSON.parse(localStorage.feeds) });
}

const feedsReducer = (state = previousState, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEEDS:
      return {feeds: action.pheeds}
    default:
      return state;
  }
};

export default feedsReducer;
