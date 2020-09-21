import { RECEIVE_PHEEDS } from '../actions/pheed_actions'

var previousState = {};

if (Boolean(localStorage.pheeds)) {
  previousState = Object.freeze({ ...JSON.parse(localStorage.pheeds) });
}

const pheedsReducer = (state = previousState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHEEDS:
      debugger
      return Object.assign({}, state, [action.pheeds])
    default:
      return state;
  }
};

export default pheedsReducer;
