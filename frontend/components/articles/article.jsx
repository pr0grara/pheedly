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
        {Object.values(this.props.articles).length === 0 ? 
          null 
          : 
          <a href={articles[randNum].url}>{articles[randNum].title}</a> 
        }
      </>
    )
  }
} 

export default Article;