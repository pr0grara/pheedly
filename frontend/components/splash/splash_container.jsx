import Splash from './splash';
import { connect } from 'react-redux';
import { displaySources } from '../../actions/source_actions'


const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mDTP = dispatch => ({
  addSourcesToState: user => dispatch(displaySources(user))
})

export default connect(mSTP, mDTP)(Splash);
//export default Sidebar;