import LeftNav from './left_nav';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { addSourcesToState, searchForSources } from '../../actions/source_actions'
import { bingEntities, bingNewsByQuery } from '../../util/article_api_util';
import { addQueryArticles } from '../../actions/article_actions';

const mSTP = ({session, entities: {users}}) => {
  return {
    currentUser: users,
    sessionId: session.id,
    screenSize: session.windowSize,
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  // addSourcesToState: user => dispatch(addSourcesToState(user))
  sourceData: source => bingEntities(source),
  querySearch: query => bingNewsByQuery(query),
  dispatchQueryArticles: articles => dispatch(addQueryArticles(articles))
})

export default connect(mSTP, mDTP)(LeftNav);