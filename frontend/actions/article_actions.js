import * as APIUtil from '../util/article_api_util'

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE_ERRORS = 'RECEIVE_ARTICLE_ERRORS';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';

export const receiveArticles = articles => {
  //debugger
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
  debugger
  return ({
    type: RECEIVE_CONTENT,
    contentType: 'json',
    article
  })
};

export const displayArticles = () => dispatch => {
  //debugger
  return (
  APIUtil.articles().then((obj) => (
    dispatch(receiveArticles(obj.articles))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
  )
};

export const fetchContent = () => dispatch => {
  //debugger
  return (
    APIUtil.fetch().then((obj) => (
      dispatch(receiveContent(obj.article))
    ), err => (
      dispatch(receiveErrors(err.responseJSON))
    ))
  )
};