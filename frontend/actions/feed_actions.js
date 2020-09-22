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
    // debugger
    dispatch(receiveFeeds(obj))
  }
  ))
}

export const addFeedsToState = user => dispatch => {
  return (
    APIUtil.grabFeeds(user).then(obj => {
      // debugger
      localStorage.setItem('feeds', JSON.stringify(obj.feeds))
      dispatch(receiveFeeds(obj))
      return obj
    })
  )
}

export const addUserFeed = (user, source, pheed) => dispatch => {
  // debugger
  return APIUtil.newFeed(user, source, pheed)
  .then((res) => {
    APIUtil.grabFeeds(user).then((obj) => {
      const sources = obj.feeds.map(feed => feed.source)
      localStorage.sources = JSON.stringify(sources)
      dispatch(receiveSources(sources));
      dispatch(addNewSourceArticles(sources[sources.length-1]))
    });
  });
};