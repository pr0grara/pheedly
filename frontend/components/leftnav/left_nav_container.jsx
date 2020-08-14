import LeftNav from './left_nav';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions'
import { addSourcesToState } from '../../actions/source_actions'

const mSTP = ({session, entities: {users}}) => {
  return {
    // currentUser: users[session.id],
    currentUser: users,
    sessionId: session.id,
    screenSize: session.windowSize,
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  addSourcesToState: user => dispatch(addSourcesToState(user))

})

export default connect(mSTP, mDTP)(LeftNav);
//export default Sidebar;