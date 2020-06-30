import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }

  display() {
    
  }

  componentDidMount() {
    this.props.showArticles();
  }

  render() {
    const randNum = Math.floor(Math.random() * 9)
    const articles = this.props.articles
    return (
      <>
          <h1>hi</h1>
        {Object.values(this.props.articles).length === 0 ? 
          null 
          : 
          <a href={articles[randNum].url}>{articles[randNum].title}</a> 
          // <p>this is a random article....ok? Ok cool thanks for playing along,
          //    actually because you asked pulling in real articles from the web is
          //    totally within my capabilities, it's just that after 100 hits to my
          //    endpoint they cut me off unless I give them legal tender, which I would 
          //    rather not do yet. Anyway thanks for staying updated with the current news.
          // </p>
        }
      </>
    )
  }
} 

export default Article;