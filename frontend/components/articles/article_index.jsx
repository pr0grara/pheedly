import React from 'react';

class ArticleIndex extends React.Component {
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
    const articles = Object.values(this.props.articles)
    return (
      <div className='article-index'>
        <h1>The Wall Street Journal</h1>
        {Object.values(this.props.articles).length === 0 ?
          null
          :
          articles.map(art => (
            <ul className='article-index-item' key={Math.floor(Math.random() * 1000)}>
              <li><a href={art.url}><img className='article-image' src={art.urlToImage}/></a></li>
              <div className='article-item-content'>
                <li><a href={art.source.url}>{art.source.name}</a></li>
                <li><a href={art.url}>{art.title}</a></li>
                <li>{art.content}</li>
              </div>
            </ul>
          ))
        }
      </div>
    )
  }
}

export default ArticleIndex;