import { RECEIVE_SOURCES } from '../actions/source_actions'

const sourcesReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SOURCES:
      return Object.assign({}, state, [action.sources]);
    default:
      return state;
  }
};

export default sourcesReducer;
