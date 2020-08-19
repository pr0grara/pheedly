import React from 'react';
import { withRouter } from 'react-router';

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {keyword: ""}
    this.handleClick = this.handleClick.bind(this);
    this.articles = [];
    this.dateifyier = this.dateifyier.bind(this)
    this.pubTime = this.pubTime.bind(this)
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

  pubTime(pubDate) {
    return new Date(pubDate).getTime();
  }

  dateifyier(pubTime, currTime) {
    var delta = (currTime - pubTime) / 60000
    if (delta < 59) {
      return `${Math.floor(delta)} min ago`
    } else if (delta > 1440) {
      var days = Math.floor(delta / 1440)
      return `${days} day${days > 1 ? "s" : ""} ago`
    } else {
      var hours = Math.floor(delta / 60);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`
    }
  }

  render() {
    if (Object.values(this.props.articles).length === 0) 
    return (
      <form className='source-form'>
          <input type="text" onChange={this.update("keyword")} value={this.state.keyword}/>
          <input type="submit" onClick={this.handleClick}/>
        </form>
      )
      var currTime = Date.now();
      var articles = [];
      var localArts = JSON.parse(localStorage.articles)
      
      Object.values(localArts).forEach((art) => {
        if (art !== localArts.time) articles.push(art.value);
      })
      articles = articles.flat();
      articles.forEach(art => {
        art.delta = this.pubTime(art.datePublished)
        art.dateified = this.dateifyier(art.delta, currTime)
      })
      articles.sort((a, b) => {
        return a.delta + b.delta;
      })
      // articles = this.shuffle(articles)
      
    return (
      <div className='article-index-wrapper'>
        <div className='article-index'>
          <h1>Today</h1>
          <h2>The insights you need to stay ahead</h2>
          { articles.length === 0 ?
            null
            :
            articles.map((art, i) => {
              return !Boolean(art.description) || !Boolean(art.image) ? null :
              <ul className='article-index-item' key={i}>
                <li>
                  <a href={art.url}>
                    <img className='article-image' src={art.image.thumbnail.contentUrl} />
                  </a>
                </li>
                <div className='article-item-content'>
                  <li id='index-item-title'><a href={art.url}>{art.name}</a></li>
                  <li><a href={art.url}>{art.provider[0].name}</a></li>
                  <li>{art.dateified}</li>
                  <li>{art.description}</li>
                </div>
              </ul>
            })
          }
        </div>
      </div>
    )
  }
}

export default withRouter(ArticleIndex);