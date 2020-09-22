import { RECEIVE_SOURCES, RECEIVE_MATCHING_SOURCES } from '../actions/source_actions'
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';

// debugger
var previousState = {};
if (Boolean(localStorage.sources)) {
  previousState = Object.freeze({...JSON.parse(localStorage.sources)});
}

const sourcesReducer = (state = previousState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SOURCES:
      return { userSources: action.sources };
    case RECEIVE_MATCHING_SOURCES:
      return {
        userSources: previousState,
        search: { ...action.sources },
      };
    case LOGOUT_CURRENT_USER:
      return {};
    default:
      return state;
  }
};

export default sourcesReducer;
