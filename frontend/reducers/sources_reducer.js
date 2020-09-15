import { RECEIVE_SOURCES, RECEIVE_PHEEDS } from '../actions/source_actions'

const sourcesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SOURCES:
      return Object.assign({}, state, [action.sources]);
    // case RECEIVE_PHEEDS:
    //   return Object.assign({}, state, [action.pheeds])
    default:
      return state;
  }
};

export default sourcesReducer;
