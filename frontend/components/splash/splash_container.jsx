import Splash from './splash';
import { connect } from 'react-redux';

const mSTP = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id],
  };
};

const mDTP = dispatch => ({
  // addSourcesToState: user => dispatch(addSourcesToState(user))
})

export default connect(mSTP, mDTP)(Splash);
