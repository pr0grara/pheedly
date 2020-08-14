import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { displayArticles, curryArticles } from '../../actions/article_actions';
import { addSourcesToState } from '../../actions/source_actions';
import ArticleIndex from './article_index';
// import { curryArticles } from '../../util/article_api_util';

const mSTP = state => {
  var articles = state.entities.articles;
  if (Object.keys(articles).length === 0) {
    let localArts = localStorage.getItem('articles')
    if(!!localArts) {
      articles = localArts
    }
  }
  var sources = state.entities.sources;
  if (Object.keys(sources).length === 0) {
    sources = JSON.parse(localStorage.getItem('sources'))
  }
  return {
    user: state.entities.users[state.session.id],
    articles: articles,
    sources: {0:sources}
  };
}

const mDTP = dispatch => {
  // debugger
  return {
    showArticles: (source) => dispatch(displayArticles(source)),
    addSourcesToState: (user) => dispatch(addSourcesToState(user)),
    curryArticles: (sources) => dispatch(curryArticles(sources))
  };
};

export default connect(mSTP, mDTP)(ArticleIndex);
