import * as APIUtil from '../util/source_api_util'; //feeds are join table between user and sources
import { curryArticles } from '../actions/article_actions'

export const RECEIVE_SOURCES = 'RECEIVE_SOURCES';
export const RECEIVE_MATCHING_SOURCES = "RECEIVE_MATCHING_SOURCES";

export const receiveSources = sources => {
  return ({
    type: RECEIVE_SOURCES,
    sources
  })
}

export const sourceMatches = sources => {
  return ({
    type: RECEIVE_MATCHING_SOURCES,
    sources
  })
}

export const addSourcesToState = sources => dispatch => { 
  // debugger 
  localStorage.setItem('sources', JSON.stringify(sources))
  dispatch(receiveSources(sources))
  if (!Boolean(localStorage.articles)) dispatch(curryArticles(sources)) //this is where we make the call to fetch articles
}

// export const addSourcesToState = user => dispatch => {
//   return (
//     APIUtil.grabSourcesFromFeeds(user).then(obj => {
//       localStorage.setItem('sources', JSON.stringify(obj))
//       dispatch(receiveSources(obj))
//       if (!Boolean(localStorage.articles)) dispatch(curryArticles(obj)) //this is where we make the call to fetch articles
//     }
//   )
//   )
// }

export const searchForSources = query => dispatch => {
  return (
    APIUtil.findMatchingSources(query).then(matches => {
      dispatch(sourceMatches(matches))
    })
  )
}