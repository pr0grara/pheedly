import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { displayArticles, curryArticles } from '../../actions/article_actions';
import { displaySources } from '../../actions/source_actions';
import ArticleIndex from './article_index';
// import { curryArticles } from '../../util/article_api_util';

const mSTP = state => {
  // debugger
  return {
    user: state.entities.users[6],
    articles: state.entities.articles,
    sources: state.entities.sources
  };
}

const mDTP = dispatch => {
  // debugger
  return {
    showArticles: (source) => dispatch(displayArticles(source)),
    showSources: (user) => dispatch(displaySources(user)),
    curryArticles: (sources) => dispatch(curryArticles(sources))
  };
};

export default connect(mSTP, mDTP)(ArticleIndex);
