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
      return {...action.sources};
    default:
      return state;
  }
};

export default sourcesReducer;
