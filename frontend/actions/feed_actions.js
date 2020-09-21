import * as APIUtil from '../util/feed_api_util';
import { receiveSources } from './source_actions'
import { addNewSourceArticles } from './article_actions';

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
  APIUtil.grabFeeds(user).then(obj => {
    debugger
    dispatch(receiveFeeds(obj))
  }
  ))
}

export const addFeedsToState = user => dispatch => {
  return (
    APIUtil.grabFeeds(user).then(obj => {
      localStorage.setItem('feeds', JSON.stringify(obj))
      dispatch(receiveFeeds(obj))
    })
  )
}

export const addUserFeed = (user, source, pheed) => dispatch => {
  debugger;
  return APIUtil.newFeed(user, source, pheed)
  .then((res) => {
    console.log('it worked')
    APIUtil.grabFeeds(user).then((sources) => {
      debugger
      console.log(sources);
      localStorage.sources = JSON.stringify(sources)
      dispatch(receiveSources(sources));
      dispatch(addNewSourceArticles(sources[sources.length-1]))
    });
  });
};