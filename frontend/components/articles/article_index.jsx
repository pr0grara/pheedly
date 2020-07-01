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
    this.render()
  }
  
  render() {
    const randNum = Math.floor(Math.random() * 9)
    const articles = Object.values(this.props.articles)
    return (
      <>
        <h1>hi</h1>
        {Object.values(this.props.articles).length === 0 ?
          null
          :
          articles.map(art => (
            <ul className='article-index' key={Math.floor(Math.random() * 1000)}>
              <li><a href={art.url}><img className='article-image' src={art.urlToImage}/></a></li>
              <li><a href={art.source.url}>{art.source.name}</a></li>
              <li><a href={art.url}>{art.title}</a></li>
            </ul>
          ))
        }
      </>
    )
  }
}

export default ArticleIndex;