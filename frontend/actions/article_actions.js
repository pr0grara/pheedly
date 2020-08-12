import * as APIUtil from '../util/article_api_util'
import store from '../store/store'

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE_ERRORS = 'RECEIVE_ARTICLE_ERRORS';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';

export const receiveArticles = articles => {
  // debugger
  return ({
  type: RECEIVE_ARTICLES,
  articles
  })
};

export const receiveErrors = errors => ({
  type: RECEIVE_ARTICLE_ERRORS,
  errors
});

export const receiveContent = article => {
  // debugger
  return ({
    type: RECEIVE_CONTENT,
    contentType: 'json',
    article
  })
};

export const displayArticles = source => dispatch => {
  // debugger
  return (
  APIUtil.articles(source).then((obj) => (
    // dispatch(receiveArticles(obj.articles[0]))
    // dispatch(receiveArticles(Object.values(obj.articles)))
    dispatch(receiveArticles(obj))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
  )
};

export const curryArticles = sources => dispatch => {
  let res = {};
  let curryLength = sources.length
  while (sources.length > 0) {
    // debugger
    APIUtil.articles(sources.pop().code)
    .then(obj => {
      // debugger
      res[obj.request_parameters.source] = obj;
      if (Object.keys(res).length === curryLength) {
        // debugger
        dispatch(receiveArticles(res))
      }
    })
    .catch(err => {
      debugger
      console.log(err)
    })
  }
  // debugger
}

export const dispatchArticles = articles => dispatch => {
  dispatch(receiveArticles(articles))
}
