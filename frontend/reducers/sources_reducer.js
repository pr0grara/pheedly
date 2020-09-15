import { RECEIVE_SOURCES, RECEIVE_PHEEDS } from '../actions/source_actions'

// debugger
var previousState = {};
if (Boolean(localStorage.sources)) {
  previousState = Object.freeze({...JSON.parse(localStorage.sources)});
}

const sourcesReducer = (state = previousState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SOURCES:
      // debugger
      // return { sources: action.sources }
      return { 'this': 'is a test' };
    // case RECEIVE_PHEEDS:
    //   return Object.assign({}, state, [action.pheeds])
    default:
      return state;
  }
};

export default sourcesReducer;
