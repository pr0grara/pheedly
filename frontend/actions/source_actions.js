import * as APIUtil from '../util/feed_api_util'; //feeds are join table between user and sources

export const RECEIVE_SOURCES = 'RECEIVE_SOURCES';

export const receiveSources = sources => {
  // debugger 
  return ({
    type: RECEIVE_SOURCES,
    sources
  })
}

export const displaySources = user => dispatch => {
  // debugger
  return (
    APIUtil.grabFeeds(user).then(obj => (
      dispatch(receiveSources(obj))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  )
}