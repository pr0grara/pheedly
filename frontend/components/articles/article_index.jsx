import React from 'react';
import { withRouter, Redirect } from 'react-router';
import AddSource from '../sources/add_source'

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {keyword: ""}
    this.handleClick = this.handleClick.bind(this);
    this.articles = [];
    this.dateifyier = this.dateifyier.bind(this)
    this.publishedTime = this.publishedTime.bind(this)
  }
  
  componentDidMount() {
    let root = document.getElementById('root');
    root.style.height = `${root.scrollHeight}px` //updates root#div's height so that footer can be properly styled
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

  // shuffle(arr) {
  //   var j, x, i;
  //   for (i = arr.length - 1; i > 0; i--) {
  //     j = Math.floor(Math.random() * (i + 1));
  //     x = arr[i];
  //     arr[i] = arr[j];
  //     arr[j] = x;
  //   }
  //   return arr;
  // }

  publishedTime(pubDate) {
    return new Date(pubDate).getTime(); //converts publication timestamp to epoch
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

  //articles index uses the articles cached in localStorage rather than the ones stored in state.
  //this *seems* to lend itself better to pheedly as the article index is a hefty component which 
  //should begin loading ASAP but then only update itself once every 30 min or so   
  //clearly not a production pace but an appropriate one for pheedly :)
  render() { 
    if (Object.values(this.props.articles).length === 0) return <Redirect to='/sources' />
    //   return (
    //     <form className='source-form'>
    //         <input type="text" onChange={this.update("keyword")} value={this.state.keyword}/>
    //         <input type="submit" onClick={this.handleClick}/>
    //       </form>
    //     )
      var currTime = Date.now(); //grabs epoch time of render
      var articles = []; //instantiate our articles array
      var localArts = JSON.parse(localStorage.articles) //grabs cached articles from localStorage
      //there should not be a case where localSotage throws an error because on line 65, if 
      //this.props.articles exists then so should localStorage.articles and if not we render source form
      
      Object.values(localArts).forEach((art) => { //iterate over articles from local storage
        if (art !== localArts.time) articles.push(art.value); //push all objects except timestamp to our articles arr
      })
      articles = articles.flat(); //after flattening we finally have our undressed articles ready for render
      articles.forEach(art => { //lets dress them up
        art.pubTime = this.publishedTime(art.datePublished); //stores the epoch time of publication on corresponding article obj
        art.delta = currTime - art.pubTime;
        art.dateified = this.dateifyier(art.pubTime, currTime); //compares publication time vs current time and converts result to min, hours, days
        //"time since publication" delivered compellingly is an important feature of pheedly 
        //CONSIDER: clicking timestamp fetches results from a news search of key words in title/article algorithim
        //something a user might want to do when an article is days or even hours old
      })
      articles.sort((a, b) => {
        return a.delta - b.delta; //sorts articles arr in order of most recently published
      })
      // this.shuffle(articles)
      
    return (
      <div className='article-index-wrapper'>
        <div className='article-index'>
          <div className='article-index-header-row'>
            <h1 className='article-index-h1'>Today</h1>
            <h2 className='article-index-h2'>The insights you need to stay ahead</h2>
          </div>
          {articles.length === 0 ?
            null
            :
            <div className='articles-column'>
              {articles.map((art, i) => {
                return !Boolean(art.description) || !Boolean(art.image) ? null : //desc and img are requirements of articles... without them we are nothing
                <ul className='article-index-item' key={i}>
                  <li>
                    <a href={art.url}>
                      <img className='article-image' src={art.image.thumbnail.contentUrl} />
                    </a>
                  </li>
                  <div className='article-item-content'>
                    <li id='index-item-title'><a href={art.url}>{art.name}</a></li>
                      <li><a href={art.url}>{art.provider[0].name}</a> / {art.dateified}</li>
                    <li>{art.description}</li>
                  </div>
                </ul>
              })}
          </div>
          }
        </div>
      </div>
    )
  }
}

export default withRouter(ArticleIndex);