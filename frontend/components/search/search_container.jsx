import Search from './search'
import { connect } from 'react-redux'

const mSTP = ({session, entities: { users }}) => {
  return {
    currentUser: users,
    sessionId: session.id,

  }
}

// const mDTP = dispatch => {
//   return {

//   }
// }

export default connect(mSTP)(Search);