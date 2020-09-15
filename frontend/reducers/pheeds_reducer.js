import { RECEIVE_PHEEDS } from '../actions/pheed_actions'

const pheedsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHEEDS:
      return Object.assign({}, state, [action.pheeds])
    default:
      return state;
  }
};

export default pheedsReducer;
