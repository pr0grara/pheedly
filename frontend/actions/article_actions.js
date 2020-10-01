import * as APIUtil from '../util/article_api_util'
export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE_ERRORS = 'RECEIVE_ARTICLE_ERRORS';
export const RECEIVE_CONTENT = 'RECEIVE_CONTENT';
export const ADD_QUERY_ARTICLES = 'ADD_QUERY_ARTICLES';

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

export const addQueryArticles = articles => {
  return ({
    type: ADD_QUERY_ARTICLES,
    contentType: 'json',
    articles
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
    APIUtil.bingNewsBySource(source.code)
    .then(obj => {
      if (obj.value.length === 0) {
        res["error"] = obj.queryContext.originalQuery;
      } else {
        res[obj.value[0].provider[0].name] = obj;
      }
      
      if (Object.keys(res).length === curryLength) {
        res.time = Date.now();
        localStorage.setItem("articles", JSON.stringify(res)) //cache articles to LS
        dispatch(receiveArticles(res)) //dispatch articles to state
        window.location.reload(); //results from promises come in after home renders, refresh to rerender
        //dont need this cause fixed state... update sometimes I need otrher times i dont ???
      }
    })
    .catch(err => {
      console.log(err)
    })
  }
}

export const addNewSourceArticles = source => dispatch => {
  APIUtil.bingNewsBySource(source.code)
  .then(newArticles => {
    var articles = JSON.parse(localStorage.articles)
    articles[newArticles.value[0].provider[0].name] = newArticles;
    localStorage.articles = JSON.stringify(articles)
    dispatch(receiveArticles(articles))
    window.location.reload();
  })
}

export const dispatchArticles = articles => dispatch => {
  dispatch(receiveArticles(articles))
}

