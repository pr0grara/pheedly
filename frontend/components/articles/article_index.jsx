import React from 'react';
// import { curryArticles } from '../../util/article_api_util'

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {keyword: ""}
    this.handleClick = this.handleClick.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.articles = [];
  }

  display() {

  }

  componentWillMount() {
    // this.props.addSourcesToState(this.props.user)
    // debugger
  }

  componentDidMount() {
    // debugger
    // const sources = this.props.sources[0];
    // this.props.curryArticles(sources)
  }
  
  handleClick(e) {
    e.preventDefault()
    const sources = this.props.sources[0]
    // debugger
    this.props.curryArticles(sources)
    // console.log(articles)
    // this.props.showArticles(this.state.keyword);
    // sources.forEach(source => {
    //   this.props.showArticles(source.code).then((obj) => {
    //     this.articles.push(obj)
    //   })
    //   this.articles.push(articles)
    // })
    // this.articles.push(Object.values(this.props.showArticles(sources[0].code).articles));
    // this.props.showArticles(sources[1].code)
  }

  update(field) {
    // debugger
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
      // const articles = Object.values(this.props.articles.articles);
      // const source = this.props.articles.request_parameters.source;
      var articles = [];
      // Object.values(this.props.articles).forEach((art) => {
      Object.values(JSON.parse(localStorage.getItem('articles'))).forEach((art) => {
        articles.push(art.articles);
    })
    articles = articles.flat();
    articles = this.shuffle(articles)
    // const sources = Object.keys(this.props.articles.articles)
    
    return (
      <div className='article-index-wrapper'>
        <div className='article-index'>
          <h1>Today</h1>
          <h2>The insights you need to stay ahead</h2>
          { articles.length === 0 ?
          // Object.values(this.props.articles).length === 0 ?
            null
            :
            // <ul className='article-index-item' key={Math.floor(Math.random() * 1000)}>
            //   <li><a href={articles.url}><img className='article-image' src={articles.urlToImage}/></a></li>
            //   <div className='article-item-content'>
            //     <li><a href={articles.source.url}>{articles.source.name}</a></li>
            //     <li><a href={articles.url}>{articles.title}</a></li>
            //     <li>{articles.content}</li>
            //   </div>
            // </ul>
            articles.map(art => (
              <ul className='article-index-item' key={art.title.slice(0, 7)}>
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

export default ArticleIndex;