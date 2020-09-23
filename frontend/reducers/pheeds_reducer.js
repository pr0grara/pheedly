import { RECEIVE_PHEEDS, UPDATE_PHEEDS } from '../actions/pheed_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

var previousState = {};

if (Boolean(localStorage.pheeds)) {
  debugger
  previousState = Object.freeze({ ...JSON.parse(localStorage.pheeds) });
}

const pheedsReducer = (state = previousState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHEEDS:
      debugger
      return Object.assign({}, state, [action.pheeds])
    case UPDATE_PHEEDS:
      debugger
      return Object.assign({}, state, [action.pheeds]);
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default pheedsReducer;
