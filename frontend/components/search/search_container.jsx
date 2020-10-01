import Search from './search'
import { connect } from 'react-redux'

const mSTP = ({session, entities}) => {
  return {
    currentUser: entities.users,
    sessionId: session.id,
    articles: entities.articles
  }
}

// const mDTP = dispatch => {
//   return {

//   }
// }

export default connect(mSTP)(Search);