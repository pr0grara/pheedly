import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { displayArticles, fetchContent } from '../../actions/article_actions';
import Article from './article';

const mSTP = state => {
  //debugger
  return {
    content: state.entities.article
  };
};

const mDTP = dispatch => {
  //debugger
  return {
    fetchContent: () => dispatch(fetchContent()),
  };
};

export default connect(mSTP, mDTP)(Article);
