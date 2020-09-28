import LeftNav from './left_nav';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { addSourcesToState, searchForSources } from '../../actions/source_actions'
import { bingEntities } from '../../util/article_api_util';

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
  sourceData: source => bingEntities(source)
})

export default connect(mSTP, mDTP)(LeftNav);