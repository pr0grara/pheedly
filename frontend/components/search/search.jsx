import React from 'react';
import { Markup } from 'interweave'

class Search extends React.Component {
  constructor(props) {
    super(props)
    this.articles = [];
  }

  componentDidUpdate() {
    this.articles = JSON.parse(localStorage.newsSearchByQuery)
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

  highlightQuery(content) {
    const query = JSON.parse(localStorage.newsSearchByQuery).queryContext.originalQuery;
    const regex = new RegExp(query, 'gi');
    
    function capitalization(word) {
      debugger
      if (word === word.toUpperCase()) return query.toUpperCase();
      if (word === word.toLowerCase()) return query.toLowerCase();
      if (word[0] === word[0].toUpperCase()) return query[0].toUpperCase() + query.slice(1);
    }

    if (content.split(' ').length === 1) {
      return content.replace(regex, `<span className='hl'>${capitalization(content)}</span>`);
    }

    const html = content.split(' ').map(word => {
      return word.replace(regex, `<span className='hl'>${capitalization(word)}</span>`);
    // if (word[0] === word[0].toUpperCase()) {
    //   return word.replace(regex, `<span className='hl'>${query[0].toUpperCase() + query.slice(1)}</span>`);
    // } else {
    //   return word.replace(regex, `<span className='hl'>${query}</span>`);
    // }
    })
    return html.join(' ')
    // if (typeof article.name !== 'string') return art
    // const html = article.name.split(' ').map(word => {
    //   // debugger
    //   const regex = new RegExp(query, 'gi');
    //   debugger
    // if (word[0] === word[0].toUpperCase()) {
    //   return word.replace(regex, `<span className='hl'>${query[0].toUpperCase() + query.slice(1)}</span>`)
    // } else {
    //   return word.replace(regex, `<span className='hl'>${query}</span>`)
    // }
    // })
    // return html.join(' ')
    // const html = articles.map(art => {
    //   if (typeof art.name !== 'string') return art
    //   // debugger
    //   const regex = new RegExp(query, 'gi');
    //   const refinedName = art.name.split(' ').map(word => {
    //     return word.replace(regex, `<span class='hl'>${query}</span>`)
    //   })
    //   // const hlText = 
    //   return refinedName.join(' ')
    // })
    // debugger
    // return html
  }

  render() {
    if (!localStorage.newsSearchByQuery) return <div>No Results</div>
    const currTime = Date.now();
    // var articles = [];
    if (!!localStorage.newsSearchByQuery) {
      this.articles = JSON.parse(localStorage.newsSearchByQuery).value;
    }
    this.articles.forEach(art => {
      art.pubTime = this.publishedTime(art.datePublished || 0);
      art.delta = currTime - art.pubTime;
      art.dateified = this.dateifyier(art.pubTime, currTime);
    })
    // articles.forEach(art => art.name = this.hihlightQuery(art))
    // articles = this.hihlightQuery(articles)
    // debugger
    this.articles.sort((a, b) => a.delta - b.delta)

    return (
      <div className="article-index-wrapper">
        <div className="article-index">
          <ul>
            {this.articles.map((art, i) => {
              if (
                !Boolean(art.description) ||
                !Boolean(art.image) ||
                art.pubTime === 0
              )
                return null;

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
                      <a href={art.url}>
                        <Markup content={this.highlightQuery(art.name)} />
                      </a>
                    </li>
                    <li>
                      <a href={art.url}>{art.provider[0].name}</a> /{" "}
                      {art.dateified}
                    </li>
                    <li>
                      <Markup content={this.highlightQuery(art.description)} />
                    </li>
                  </div>
                </ul>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;