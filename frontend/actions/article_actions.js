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
  let source = {}
  while (sources.length > 0) {
    source = sources.pop()
    APIUtil.bingNews(source.code)
    .then(obj => {
      res[obj.value[0].provider[0].name] = obj;
      if (Object.keys(res).length === curryLength) {
        res.time = Date.now();
        dispatch(receiveArticles(res)) //dispatch articles to state
        localStorage.setItem("articles", JSON.stringify(res)) //cache articles to LS
        window.location.reload(); //results from promises come in after home renders, refresh to rerender
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const addNewSourceArticles = source => dispatch => {
  APIUtil.bingNews(source.code)
  .then(newArticles => {
    debugger
    var articles = JSON.parse(localStorage.articles)
    articles[newArticles.value[0].provider[0].name] = newArticles;
    dispatch(receiveArticles(articles))
    localStorage.articles = JSON.stringify(articles)
    window.location.reload();
  })
}

export const dispatchArticles = articles => dispatch => {
  dispatch(receiveArticles(articles))
}
