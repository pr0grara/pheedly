import * as APIUtil from '../util/article_api_util'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE_ERRORS = 'RECEIVE_ARTICLE_ERRORS';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';

export const receiveArticles = articles => {
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
  return ({
    type: RECEIVE_CONTENT,
    contentType: 'json',
    article
  })
};

export const displayArticles = source => dispatch => {
  return (
  APIUtil.articles(source).then((obj) => (
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
    APIUtil.articles(sources.pop().code)
    .then(obj => {
      res[obj.request_parameters.source] = obj;
      if (Object.keys(res).length === curryLength) {
        res.time = Date.now();
        dispatch(receiveArticles(res))
        localStorage.setItem("articles", JSON.stringify(res))
        window.location.reload();
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const dispatchArticles = articles => dispatch => {
  dispatch(receiveArticles(articles))
}
