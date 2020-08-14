import * as APIUtil from '../util/feed_api_util'; //feeds are join table between user and sources
import { curryArticles } from '../actions/article_actions'

export const RECEIVE_SOURCES = 'RECEIVE_SOURCES';

export const receiveSources = sources => {
  // debugger 
  return ({
    type: RECEIVE_SOURCES,
    sources
  })
}

export const addSourcesToState = user => dispatch => {
  // debugger
  return (
    APIUtil.grabFeeds(user).then(obj => {
      // debugger
      dispatch(receiveSources(obj))
      localStorage.setItem('sources', JSON.stringify(obj))
      // dispatch(curryArticles(obj))
    }, err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  )
}