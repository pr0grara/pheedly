import React from 'react';
import { Redirect } from 'react-router-dom';

class AddSource extends React.Component {
  constructor(props) {
    super(props)
    this.state = {source: ""};
    this.handleClick = this.handleClick.bind(this);
    this.field
    this.debounce = 0;
    this.timer = Date.now();
    this.selectSource = this.selectSource.bind(this);
    this.selection = <ul></ul>;
    this.searching = true;
    this.changeState = this.changeState.bind(this);
    this.closeElement =this.closeElement.bind(this);
    this.addMenu = this.addMenu.bind(this);
  }

  update(field, time, source) {
    if (Boolean(source)) {
      return () => this.setState({
          [field]: source,
        });
    }
    if (time - this.timer > 200) {
      this.props.searchForSources(this.state.source)
    }
    this.timer = Date.now();
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  hover(e) {
    e.preventDefault()
    let source = e.target;
    source.classList.toggle('hover')
  }
  
  selectPheed(e) {
    e.preventDefault()
    let source = e.target;
    var menu = document.querySelector('.pheed-menu')
    menu.classList.toggle('open')
  }

  urlScrubber(url) {
    var cleanUrl = url.slice(8, 11) === 'www' ? url.slice(8) : 'www.' + url.slice(8)
    let end = cleanUrl.length - 1
    if (cleanUrl[end] === '/') {
      cleanUrl = cleanUrl.slice(0, end)
    }
    return cleanUrl.toLowerCase()
  }

  closeElement(e) {
    e.preventDefault()
    const bubbles = e.path;
    if (!bubbles.some(ele => ele.className === 'source-list')) {   
      this.searching = false;
    }
    this.render();
  }

  addMenu(e) {
    e.preventDefault()
    if (Boolean(!document.querySelector('.pheed-menu'))) {
      var pheeds = Object.values(this.props.pheeds);
      const follow = document.querySelector('.source-details-add-source-button-container')
      var menu = document.createElement('ul')
      menu.className = 'pheed-menu';
      let title = document.createElement('li')
      title.innerText = 'ADD TO:'
      menu.appendChild(title)

      pheeds = pheeds.map((pheed) => pheed.name )
      pheeds.forEach(pheed => {
        let li = document.createElement('li')
        li.className = 'pheed-menu-item'
        li.innerText = pheed;
        li.addEventListener('click', (e) => this.log(e))
        li.addEventListener('mouseover', (e) => this.hover(e))
        li.addEventListener('mouseleave', (e) => this.hover(e))
        menu.appendChild(li)
      })
      
      let pointer = document.createElement('div')
      pointer.className = 'pheed-menu-pointer'
      menu.appendChild(pointer)
          
      follow.appendChild(menu)
    }
  }
  
  selectSource(e) {
    // var sourceName = JSON.parse(e.target.dataset.source).name; ///////keeping this here just to remind myself this is possible
    var suggestions = document.querySelector(".suggestions");
    suggestions.style.display = "none";
    var details = document.querySelector(".source-details");
    if (details) details.classList.toggle("hidden");
    var sourceName = e.target.dataset.sourcename;
    this.state.source = sourceName;

    this.props.entitiesSearch(sourceName)
      .done(res => {
        const source = res.entities.value[0];

        this.selection = (
          <div className="source-details">
            <img src={source.image.thumbnailUrl} alt="" />
            <ul className='source-details-details'>
              <div className='source-details-navbar'>
                <div className='source-details-header'>
                  <li>{source.name}</li>
                  <li>{source.url ? this.urlScrubber(source.url) : '' }</li>
                </div>
                <div className='source-details-add-source-button-container'>
                  <div className='source-details-add-source-button' 
                  onClick={this.addMenu} 
                  onMouseOver={this.hover}
                  onMouseLeave={this.hover}
                  >FOLLOW</div>
                </div>
              </div>
              <li className='source-details-description'>{source.description}</li>
            </ul>
          </div>
        );
        // debugger
        this.searching = false; //THIS DOES NOTHING!!! 'this' is a promise and not the add source react component. 
        //does not throw an error which has lead me to believe I was switching searching state when i actually haven't
        this.render() //BUT WHY THEN DOES THIS WORK / IS REQUIRED ?!?! *scratches head vigorously* 
        //////////////////WHAT THE FXCK IS GOING ON HERE?
      })    
  }

  changeState() {
    if (!this.seaching) this.searching = true;
    var details = document.querySelector('.source-details')
    if (details && details.classList.length === 1) details.classList.toggle('hidden')
    var suggestions = document.querySelector(".suggestions");
    suggestions.style.display = "block";
  }

  autofill(e) {
    let value
    if (Boolean(e.currentTarget)) {
      value = e.currentTarget.value
      return e => this.setState({
        ["source"]: value
      });
    }
  }

  handleClick(e) {
    e.preventDefault()
    this.props.addUserFeed(this.props.user, this.state.source) //now that this works
    //make sure to update sources in state and localstorage, refresh all articles this time 
    //including ones from new source, add these articles to state and localStorage
    //and then redirect back to '/home'
    // console.log(':)')
  }

  log(e) {
    var newPheeds = Object.assign({}, this.props.pheeds)
    var pheed = e.target.innerText
    var source = this.state.source
    this.props.addUserFeed(this.props.user, source, pheed)
    newPheeds[pheed].sources.push(source)
    this.props.addNewPheed(newPheeds)
  }

  render() {
    const body = document.querySelector('body')
    body.addEventListener('click', this.closeElement)
    var newSources = [];
    // var pheeds = Object.values(this.props.pheeds)
    // var details = document.querySelector('.source-details')
    // return <div>hi</div>
    if (Boolean(this.props.sources.search)) {
      var matchedSources = Object.values(this.props.sources.search);
      var userSources = Object.values(this.props.sources.userSources).map(source => source.name)
      if (this.searching) newSources = matchedSources.filter(source => !userSources.includes(source.name))
    }

    return (
      <div className="add-source">
        <form className="source-form">
          <input
            type="text"
            onClick={this.changeState}
            onChange={this.update("source", Date.now())}
            value={this.state.source}
          />
          <input type="submit" onClick={this.handleClick} />
        </form>

        <div className="suggestions">
          <ul className='source-list'>
            <>{this.searching ? <li>sources</li> : ""}</>
            {newSources.map((source) => {
              return (
                <li
                  className={"new-source"}
                  onClick={this.selectSource}
                  onMouseOver={this.hover}
                  onMouseLeave={this.hover}
                  key={source.name}
                  data-sourcename={source.name}
                >
                  {source.name}
                </li>
              );
            })}
          </ul>
        </div>
        <>{this.selection}</> 

      </div>
    );
  }
}

export default AddSource;