import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { displayArticles } from '../../actions/article_actions';
import Article from './article';

const mSTP = state => {
  //debugger
  return {
    articles: state.entities.articles
  };
};

const mDTP = dispatch => {
  //debugger
  return {
    showArticles: () => dispatch(displayArticles()),
  };
};

export default connect(mSTP, mDTP)(Article);
