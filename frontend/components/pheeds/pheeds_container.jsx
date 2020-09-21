import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import Pheed from "./pheeds";

const mSTP = (state) => {
  return {
    pheeds: state.entities.pheeds,
    articles: state.entities.articles,
    sources: state.entities.sources
  };
};

const mDTP = (dispatch) => {
  return {}
};

export default connect(mSTP, mDTP)(Pheed);
