import { connect } from 'react-redux';
import Loading from './loading';

const mSTP = state => {
  return {
    user: state.entities.users[state.session.id],
  };
}

const mDTP = dispatch => {
  return {
  };
};

export default connect(mSTP, mDTP)(Loading);