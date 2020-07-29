import Splash from './splash';
import { connect } from 'react-redux';

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mDTP = dispatch => ({

})

export default connect(mSTP, mDTP)(Splash);
//export default Sidebar;