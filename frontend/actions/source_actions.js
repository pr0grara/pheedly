import * as APIUtil from '../util/source_api_util'; //feeds are join table between user and sources
import { curryArticles } from '../actions/article_actions'

export const RECEIVE_SOURCES = 'RECEIVE_SOURCES';
// export const RECEIVE_PHEEDS = 'RECEIVE_PHEEDS';

export const receiveSources = sources => {
  return ({
    type: RECEIVE_SOURCES,
    sources
  })
}

// export const receivePheeds = pheeds => {
//   //debugger
//   return ({
//     type: RECEIVE_PHEEDS,
//     pheeds
//   })
// }

// export const addUserFeed = (user, source) => dispatch => {
//   //debugger
//   return (
//     APIUtil.newFeed(user, source).then(user => {
//       APIUtil.grabFeeds(user).then((obj) => {
//         console.log(obj)
//         //debugger
//         dispatch(receiveSources(obj))
//       })
//     })
//   )
// }

export const addSourcesToState = user => dispatch => {
  //debugger
  return (
    APIUtil.grabSourcesFromFeeds(user).then(obj => {
      //debugger
      let localArts = localStorage.articles;
      dispatch(receiveSources(obj))
      localStorage.setItem('sources', JSON.stringify(obj))
      if (!Boolean(localArts)) dispatch(curryArticles(obj)) //this is where we make the call to fetch articles
    }
  )
  )
}

export const searchForSources = query => {
  // return (
    // APIUtil.
  // )
}

// export const addPheedsToState = user => dispatch => {
//   //debugger
//   return (
//     APIUtil.grabPheeds(user).then(obj => {
//       //debugger
//       // let localArts = localStorage.articles;
//       dispatch(receivePheeds(obj))
//       localStorage.setItem('pheeds', JSON.stringify(obj))
//       if (!Boolean(localArts)) dispatch(curryArticles(obj))
//     }
//   )
//   )
// }
