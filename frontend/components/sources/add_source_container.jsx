import { connect } from 'react-redux';
import { addUserFeed } from '../../actions/feed_actions';
import { searchForSources } from '../../actions/source_actions'
import AddSource from './add_source';
import * as ArticleAPIUtil from '../../util/article_api_util'
import { addNewPheedToState } from '../../actions/pheed_actions';

const mSTP = state => {
  var sources = state.entities.sources;
  var pheeds = state.entities.pheeds;
  if (Object.keys(sources).length === 0) {
    sources = JSON.parse(localStorage.getItem('sources'))
  }
  //debugger
  return {
    user: state.entities.users[state.session.id],
    sources,
    pheeds,
    // currSources: {0:sources}
  };
};

const mDTP = dispatch => {
  return {
    entitiesSearch: ArticleAPIUtil.bingEntities,
    searchForSources: query => dispatch(searchForSources(query)),
    addUserFeed: (user, source, pheed) => dispatch(addUserFeed(user, source, pheed)),
    addNewPheed: pheed => dispatch(addNewPheedToState(pheed))
  };
};

export default connect(mSTP, mDTP)(AddSource);