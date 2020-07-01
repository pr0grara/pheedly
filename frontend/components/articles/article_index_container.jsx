import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { displayArticles } from '../../actions/article_actions';
import ArticleIndex from './article_index';

const mSTP = state => {
  return {
    articles: state.entities.articles
  };
}

const mDTP = dispatch => {
  return {
    showArticles: () => dispatch(displayArticles()),
  };
};

export default connect(mSTP, mDTP)(ArticleIndex);
