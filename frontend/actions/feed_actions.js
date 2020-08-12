import * as APIUtil from '../util/feed_api_util';

export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';

export const receiveFeeds = feeds => {
  // debugger
  return ({
    type: RECEIVE_FEEDS,
    feeds
  })
}

export const displayFeeds = user => dispatch => {
  return (
  APIUtil.grabFeeds(user).then(obj => (
    dispatch(receiveFeeds(obj))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
  )
}