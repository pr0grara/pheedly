import React from 'react';
import { Link } from 'react-router-dom'


class LeftNav extends React.Component {
  constructor(props) {
    // debugger
    super(props)
    this.currentUser = this.props.currentUser
    this.toggleLeftNav = this.toggleLeftNav.bind(this)
    this.addContent = this.addContent.bind(this)
    this.leftNavState = false;
    if (Object.values(this.props.currentUser).length > 0) {
      this.userName = this.props.currentUser[this.props.sessionId].email 
    } else {
      this.userName = "N/A"
    }
    this.userLogoDropDown = this.userLogoDropDown.bind(this);
    this.logout = this.props.logout.bind(this);
  }
  
  componentDidMount() {
    // debugger
    let root = document.getElementById('root')
    let leftNav = document.getElementById("leftNav")
    root.style.height = `${this.props.screenSize.height}px`
    root.style.width = `${this.props.screenSize.width}px`
    if (this.leftNavState) { 
      leftNav.style.height = `${this.props.screenSize.height}px`
      leftNav.style.width = `${(this.props.screenSize.width) * 0.17}px`
    }
  }
  
  componentWillUpdate(nP, nS) {
    this.userOptions = false;
    // debugger
    if (!nP.currentUser[1]) {
      this.userName = 'N/A'
    } else {
      this.userName = nP.currentUser[nP.sessionId].email
    }
  }

  toggleLeftNav(e) {
    // e.preventDefault();
    let leftNavWrapper = document.getElementById("leftNav-wrapper")
    let leftNav = document.getElementById("leftNav")
    let side_toggle = document.getElementsByClassName("leftNav-dock")[0]
    let articles = {style: {marginLeft:""}};
    // debugger
    
    if (e.target.id === "user-logo" || e.target.id === "button") return

    if (document.getElementsByClassName('article-index').length > 0) {
     articles = document.getElementsByClassName('article-index')[0]
    }

    if (leftNavWrapper.style.width === "25%") {
      this.leftNavState = false;
      leftNavWrapper.style.width = '0px'
      leftNav.style.display = 'none'
      side_toggle.style.width = "4.5%"
      articles.style.marginLeft = "4.5%"
      articles.style.width = "95.5%"
    } else {
      this.leftNavState = true;
      leftNav.style.display = 'flex'
      leftNavWrapper.style.width = '25%'
      articles.style.marginLeft = "29.5%"
      articles.style.width = "70.5%"
    }
  }

  addContent() {
    console.log("you are awesome")
  }

  userLogoDropDown(e) {
    e.preventDefault();
    let dropdown = document.getElementById('user-dropdown')
    console.log(dropdown.className)
    // debugger
    // console.log(dropdown.style.display)
    if (!this.userOptions) {
      dropdown.className = 'user-menu';
      this.userOptions = true;
    } else {
      dropdown.className = 'user-dropdown-hidden';
      this.userOptions = false;
    }
  }
  
  render() {
    const active = () => (
    <div id='leftNav-container'>
      <div className='leftNav-dock' onClick={this.toggleLeftNav}>
        <Link to='/'><img id='leftNav-logo' src={window.feedlyLogo} /></Link>
        <div className='toggle-leftNav'>
            <button id='button' onClick={this.userLogoDropDown}>+</button>
        </div> 
        <div id='user-options-menu'>
            <label className='user-logo' onClick={this.userLogoDropDown}>{this.userName[0]}</label>
        </div>
        {/* <button className='logout' onClick={this.logout}>Logout</button> */}
      </div>
      <div className="leftNav-wrapper" id='leftNav-wrapper'>
        <div id='leftNav'>
          <ul id='side-nav'>  
            <li><Link to='/'>home</Link></li>
            <li><Link to='/pheed/1'>pheeds</Link></li>
            <li><Link to='/articles'>finance</Link></li>
          </ul>
          <div className='add-content'>
            <button onClick={this.addContent}>Create Pheed</button>
          </div>
        </div>
      </div>
      <div id='user-dropdown' className='user-dropdown-hidden'>
        <ul>
          <div id='user-title'>
            <div className='user-logo'>{this.userName[0]}</div>
            <div>
              <div>{this.userName}</div>
              <div>free</div>
            </div>
          </div>
          <li>settings</li>
          <li>organize sources </li>
          <li>mobile apps</li>
          <li>browser add-ons</li>
          <li>support</li>
          <li>privacy</li>
          <li>terms and policy</li>
          <li onClick={this.logout}>logout</li>
        </ul>
      </div>
    </div>
    )
    const inactive = () => (
      <div></div>
    )
    return this.userName === 'N/A' ? inactive() : active()
  }
}

export default LeftNav;