import React from 'react';
import { Link, Redirect } from 'react-router-dom'


class LeftNav extends React.Component {
  constructor(props) {
    super(props)
    this.currentUser = this.props.currentUser;
    this.toggleLeftNav = this.toggleLeftNav.bind(this);
    this.hover = this.hover.bind(this);
    this.highlight = this.highlight.bind(this);
    this.addContent = this.addContent.bind(this);
    this.leftNavState = false;
    if (Object.values(this.props.currentUser).length > 0) {
      this.userName = this.props.currentUser[this.props.sessionId].email; 
    } else {
      this.userName = "N/A";
    }
    this.userLogoDropDown = this.userLogoDropDown.bind(this);
    this.logout = this.props.logout.bind(this);
    this.previousTarget = '';
  }
  
  componentDidMount() {
    let leftNav = document.getElementById("leftNav");
    let homePheed = document.getElementById('leftNav-home-pheed');
    if (this.leftNavState) { 
      leftNav.style.height = `${window.screen.availHeight}px`;
      leftNav.style.width = `${(window.screen.availWidth) * 0.17}px`;
    }
  }
  
  toggleLeftNav(e) {
    e.preventDefault();
    let leftNavContainer = document.getElementById("leftNav-container")
    let leftNavWrapper = document.getElementById("leftNav-wrapper")
    let leftNav = document.getElementById("leftNav")
    let side_toggle = document.getElementsByClassName("leftNav-dock")[0]
    let articles = {style: {marginLeft:""}};
    let navBar = document.getElementById("header-items-container")
    
    if (e.target.className === "user-logo-small" || e.target.className === "button") return

    if (document.getElementsByClassName('article-index').length > 0) {
     articles = document.getElementsByClassName('article-index-wrapper')[0]
    }

    if (leftNavWrapper.style.width === "269px") {
      this.leftNavState = false;
      leftNavContainer.style.width = '49px'
      leftNavWrapper.style.width = '0px'
      leftNav.style.display = 'none'
      side_toggle.style.width = "49px"
      articles.style.width = "-webkit-calc(100% - 49px)"
      navBar.style.margin = "0 0 0 100px"
    } else {
      this.leftNavState = true;
      leftNav.style.display = 'flex'
      leftNavContainer.style.width = '318px'
      leftNavWrapper.style.width = '269px'
      articles.style.width = "-webkit-calc(100% - 318px)"
      navBar.style.margin = "0 50px 0 320px"
    }
  }

  addContent() {
    console.log("you are awesome")
    window.location.href='#/sources'
  }

  userLogoDropDown(e) {
    e.preventDefault();
    let dropdown = document.getElementById('user-dropdown')
    console.log(dropdown.className)
    if (!this.userOptions) {
      dropdown.className = 'user-menu';
      this.userOptions = true;
    } else {
      dropdown.className = 'user-dropdown-hidden';
      this.userOptions = false;
    }
  }

  hover(e) {
    e.preventDefault();
    var pheed = e.target.innerText.toLowerCase();
    var sideNavItems = document.querySelectorAll('.sidenav-item')
    var sideNavItem = e.currentTarget;

    sideNavItems.forEach(item => {
      if (item.innerText.toLowerCase() === pheed) sideNavItem = item;
    })
    this.previousTarget = sideNavItem;
    
    var pheeds = JSON.parse(localStorage.pheeds);
    var sources = [];
    Object.keys(pheeds).includes(pheed) ? 
      sources = pheeds[pheed].sources :
      null;

    var sourceList = document.createElement('ul')
    sourceList.id = 'leftNav-pheed-item-source-list'
    
    if (sources.length > 0) {
      sources.forEach(source => {
        let li = document.createElement('li')
        li.className = 'leftNav-pheed-item-source-list-item'
        li.innerText = source;
        sourceList.appendChild(li)
      })
      if (sideNavItem.childElementCount < 3) sideNavItem.appendChild(sourceList);
    }

    sideNavItem.addEventListener("mouseleave", (e) => {
      var list = e.currentTarget.querySelector('ul');
      var navItems = document.getElementsByClassName('sidenav-item')
      if (Boolean(list)) {
        e.currentTarget.removeChild(list)
      }
      for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.background = 'transparent'
      }
    })
    sideNavItem.style.background = '#e6e6e6'
  }
  
  highlight(e) {
    e.preventDefault();
    let navItem = e.currentTarget;
    let navItems = document.getElementsByClassName('sidenav-item')
    
    for (let i = 0; i < navItems.length; i++) {
      navItems[i].style.color = '#333'
    }
    navItem.style.color = "#2bb24c"

    let pheed = navItem.querySelector("a").innerHTML;
    let location = window.location.href;
    location = location.split('/')
    location.pop()
    location = location.join('/')
    window.location.href = `${location + '/' + pheed}`;
  }
  
  render() {
    var pheeds = [];
    if (Boolean(localStorage.pheeds)) pheeds = JSON.parse(localStorage.pheeds);

    const active = () => (
    <div id='leftNav-container'>
      <div className='leftNav-dock' onClick={this.toggleLeftNav}>
        <Link to='/'><img id='leftNav-logo' src={window.feedlyLogo} /></Link>
        <div className='toggle-leftNav'>
            <button id='button' >+</button>
        </div> 
        <div id='user-options-menu'>
            <label className='user-logo-small' onClick={this.userLogoDropDown}>{this.userName[0]}</label>
        </div>
      </div>
      <div className="leftNav-wrapper" id='leftNav-wrapper'>
        <div id='leftNav'>
          <ul id='side-nav'>  
            <li className='sidenav-item' onMouseOver={this.hover} onClick={this.highlight}>
              <img className='leftNav-icon' src={window.today} /><Link to='/home'>today</Link>
            </li>
            <li className='sidenav-item' onMouseOver={this.hover} onClick={this.highlight}>
              <img className='leftNav-icon' src={window.bookmark} /><Link to='/home'>read later</Link>
            </li>
            <li className='sidenav-item' onMouseOver={this.hover} onClick={this.highlight}>
              <img className='leftNav-icon' src={window.train} /><Link to='/home'>train leo</Link>
            </li>
            <li className='sidenav-category'>pheeds</li>
            <li className='sidenav-item' id='leftNav-home-pheed' onMouseOver={this.hover} onClick={this.highlight}>
              <img className='leftNav-icon' src={window.all} /><Link to='/home'>home</Link>
            </li>
            {Object.values(pheeds).map(pheed => {
              // debugger
              if (!Boolean(pheed)) return
              return (
                <li className='sidenav-item' onMouseOver={this.hover} onClick={this.highlight} key={pheed.name}>
                  <img className='leftNav-icon' src={window.pheeds}/> 
                  {/* <Link to={`/${pheed.name}`}>{pheed.name}</Link> */}
                  <a>{pheed.name}</a>
                </li>
              )
            })}
          </ul>
          <div className='add-content'>
            <button onClick={this.addContent}>Follow Sources</button>
          </div>
        </div>
      </div>
      <div id='user-dropdown' className='user-dropdown-hidden'>
        <div id='user-title'>
          <div className='user-logo-big'>{this.userName[0]}</div>
          <div className='user-info'>
            <div>{this.userName}</div>
            <div>free</div>
          </div>
        </div>
        <ul>
          <li>settings</li>
          <li>organize sources </li>
          <li>mobile apps</li>
          <li>browser add-ons</li>
          <li>support</li>
          <li>privacy</li>
          <li>terms and policy</li>
          <li onClick={this.logout}>logout</li>
        </ul>
        <div className='arrow-left'></div>
      </div>
    </div>
    )
    const inactive = () => (
      <div className='inactive-leftnav'></div>
    )
    return Object.keys(this.props.currentUser).length > 0 ? active() : inactive()
  }
}

export default LeftNav;