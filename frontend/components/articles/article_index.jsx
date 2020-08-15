import React from 'react';
import { withRouter } from 'react-router';

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {keyword: ""}
    this.handleClick = this.handleClick.bind(this);
    this.articles = [];
  }
  
  handleClick(e) {
    e.preventDefault()
    const sources = this.props.sources[0]
    this.props.curryArticles(sources)
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  shuffle(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }
    return arr;
  }


  render() {
    if (Object.values(this.props.articles).length === 0) 
      return (
        <form className='source-form'>
          <input type="text" onChange={this.update("keyword")} value={this.state.keyword}/>
          <input type="submit" onClick={this.handleClick}/>
        </form>
      )

    var articles = [];
    var localArts = JSON.parse(localStorage.articles)
    
    Object.values(localArts).forEach((art) => {
      if (art !== localArts.time) articles.push(art.articles);
    })
    articles = articles.flat();
    articles = this.shuffle(articles)
    
    return (
      <div className='article-index-wrapper'>
        <div className='article-index'>
          <h1>Today</h1>
          <h2>The insights you need to stay ahead</h2>
          { articles.length === 0 ?
            null
            :
            articles.map((art, i) => (
              <ul className='article-index-item' key={i}>
                <li><a href={art.link}><img className='article-image' src={art.primary_image_link}/></a></li>
                <div className='article-item-content'>
                  <li id='index-item-title'><a href={art.link}>{art.title}</a></li>
                  <li><a href={art.source.domain}>{art.source.domain || source}</a></li>
                  <li>{art.snippet.slice(0, 250)}...</li>
                </div>
              </ul>
            ))
          }
        </div>
      </div>
    )
  }
}

export default withRouter(ArticleIndex);