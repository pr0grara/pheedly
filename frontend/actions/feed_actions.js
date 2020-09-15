import * as APIUtil from '../util/feed_api_util';
import { receiveSources } from '../actions/source_actions'

export const RECEIVE_FEEDS = 'RECEIVE_FEEDS';

export const receiveFeeds = feeds => {
  //debugger
  return ({
    type: RECEIVE_FEEDS,
    feeds
  })
}

export const displayFeeds = user => dispatch => {
  return (
  APIUtil.grabFeeds(user).then(obj => (
    dispatch(receiveFeeds(obj))
  )))
}

export const addUserFeed = (user, source) => (dispatch) => {
  // debugger;
  return APIUtil.newFeed(user, source)
  .then((res) => {
    console.log('it worked')
    APIUtil.grabFeeds(user).then((obj) => {
      console.log(obj);
      localStorage.sources = JSON.stringify(obj)
      dispatch(receiveSources(obj));
    });
  });
};