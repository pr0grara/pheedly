import { connect } from 'react-redux';
import Home from './home';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = dispatch => {
  return {
  };
};

export default connect(mSTP, mDTP)(Home);
