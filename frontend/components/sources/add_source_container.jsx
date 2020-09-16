import { connect } from 'react-redux';
import { addUserFeed } from '../../actions/feed_actions';
import { searchForSources } from '../../actions/source_actions'
import AddSource from './add_source';

const mSTP = state => {
  var sources = state.entities.sources;
  if (Object.keys(sources).length === 0) {
    sources = JSON.parse(localStorage.getItem('sources'))
  }
  //debugger
  return {
    user: state.entities.users[state.session.id],
    sources
    // currSources: {0:sources}
  };
};

const mDTP = dispatch => {
  return {
    searchForSources: query => dispatch(searchForSources(query)),
    addUserFeed: (user, source) => dispatch(addUserFeed(user, source))
  };
};

export default connect(mSTP, mDTP)(AddSource);