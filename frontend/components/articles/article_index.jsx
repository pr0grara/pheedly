import React from 'react';
import { withRouter, Redirect } from 'react-router';
import AddSource from '../sources/add_source'

class ArticleIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
    this.handleClick = this.handleClick.bind(this);
    this.articles = [];
    this.dateifyier = this.dateifyier.bind(this);
    this.publishedTime = this.publishedTime.bind(this);
    this.pheed = location.href.split("/").reverse()[0];
    this.location = location.href;
  }

  componentDidMount() {
    let root = document.getElementById("root");
    root.style.height = `${root.scrollHeight}px`; //updates root#div's height so that footer can be properly styled
  }

  handleClick(e) {
    e.preventDefault();
    const sources = this.props.sources[0];
    this.props.curryArticles(sources);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  publishedTime(pubDate) {
    if (pubDate === 0) return 0;
    return new Date(pubDate).getTime(); //converts publication timestamp to epoch
  }

  dateifyier(pubTime, currTime) {
    var delta = (currTime - pubTime) / 60000;
    if (delta < 59) {
      return `${Math.floor(delta)} min ago`;
    } else if (delta > 1440) {
      var days = Math.floor(delta / 1440);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else {
      var hours = Math.floor(delta / 60);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }
  }

  receiveSources() {
    if (this.props.location === "/home") return;
    var sources = [];
    var pheeds = Object.values(this.props.pheeds);
    pheeds.forEach((pheed) => {
      if (`/${pheed.name}` === this.props.location.pathname) sources = pheed.sources;
    });
    return sources;
  }

  pheedFilter(source, sources) {
    if (sources.length === 0) return false;
    // debugger
    return !sources.includes(source.toLowerCase());
  }
  
  //articles index uses the articles cached in localStorage rather than the ones stored in state.
  //this *seems* to lend itself better to pheedly as the article index is a hefty component which
  //should begin loading ASAP but then only update itself once every 30 min or so
  //clearly not a production pace but an appropriate one for pheedly :)
  render() {
    //sample article for testing
    // articles.push({
      //   description: "hi!",
      //   image: {
        //     thumbnail: {
          //       contentUrl:
          //         "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/39391231/1800",
          //     },
          //   },
          //   url:"https://www.google.com/search?q=flamingo&sxsrf=ALeKk00Ys4NhQ8YWKRi9IfuEruTgYo7nHg:1600823404138&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjSy-fyi_7rAhUOca0KHV8hAngQ_AUoAnoECBAQBA&biw=1920&bih=925#imgrc=wCkN-A47gphAcM",
          //   name: 'flamingo',
          // });
          
          if (Object.values(this.props.articles).length === 0)
          return <Redirect to="/sources" />;
          
          const currTime = Date.now(); //grabs epoch time of render
          var articles = []; //instantiate our articles array
          var localArts = this.props.articles; //grabs cached articles from state
          // var localArts = JSON.parse(localStorage.articles) //grabs cached articles from localStorage
          //there should not be a case where localSotage throws an error because on line 65, if
          //this.props.articles exists then so should localStorage.articles and if not we render source form
          // debugger
          Object.values(localArts).forEach((art) => {
            //iterate over articles from local storage
            if (art !== localArts.time && typeof art !== "string")
            articles.push(art.value); //push all objects except timestamp to our articles arr
          });
          
          articles = articles.flat(); //after flattening we have our articles ready for sorting chronologically
          let i = 0;
          articles.forEach((art) => {
            // debugger
            // art['source'] = i;
            art["source"] = art.provider[0].name;
            art.pubTime = this.publishedTime(art.datePublished || 0); //stores epoch time of publication
            art.delta = currTime - art.pubTime;
            art.dateified = this.dateifyier(art.pubTime, currTime); //compares publication time to current time and converts to min, hours, days
            //"time since publication" delivered compellingly is an important feature of pheedly
            //CONSIDER: clicking timestamp fetches results from a news search of key words in title/article algorithim
            //something a user might want to do when an article is days or even hours old
          });
          articles.sort((a, b) => {
            return a.delta - b.delta; //sorts articles arr in order of most recently published
          });
          
          const currentPheed = location.href.split("/").reverse()[0];
          const acceptableSources = this.receiveSources(currentPheed)
          debugger
          return (
            <div className="article-index-wrapper">
        <div className="article-index">
          <div className="article-index-header-row">
            <h1 className="article-index-h1">Today</h1>
            <h2 className="article-index-h2">
              The insights you need to stay ahead
            </h2>
          </div>
          {articles.length === 0 ? null : (
            <div className="articles-column">
              {articles.map((art, i) => {
                if (
                  !Boolean(art.description) ||
                  !Boolean(art.image) ||
                  art.pubTime === 0 ||
                  this.pheedFilter(art.source, acceptableSources)
                  // art.source !== 'Harvard Business Review'
                )
                  return null;
                //desc, img & pubTime are requirements for articles... without them we are nothing

                return (
                  <ul className="article-index-item" key={i}>
                    <li>
                      <a href={art.url}>
                        <img
                          className="article-image"
                          src={art.image.thumbnail.contentUrl}
                        />
                      </a>
                    </li>
                    <div className="article-item-content">
                      <li id="index-item-title">
                        <a href={art.url}>{art.name}</a>
                      </li>
                      <li>
                        <a href={art.url}>{art.provider[0].name}</a> /{" "}
                        {art.dateified}
                      </li>
                      <li>{art.description}</li>
                    </div>
                  </ul>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default withRouter(ArticleIndex);