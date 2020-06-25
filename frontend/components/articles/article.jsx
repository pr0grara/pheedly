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
    
    return (
      <>
        {Object.values(this.props.articles).length === 0 ? null : <img src={this.props.articles[1].urlToImage} />  }
      </>
    )
  }
} 

export default Article;