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
    const randNum = Math.floor(Math.random() * 19)
    return (
      <>
        {Object.values(this.props.articles).length === 0 ? null : <img className='article-image' src={this.props.articles[randNum].urlToImage} />  }
      </>
    )
  }
} 

export default Article;