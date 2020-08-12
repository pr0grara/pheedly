import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import sourcesReducer from './sources_reducer'
// import feedsReducer from './feeds_reducer';
import articlesReducer from './articles_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  // feeds: feedsReducer,
  sources: sourcesReducer,
  articles: articlesReducer
})

export default entitiesReducer