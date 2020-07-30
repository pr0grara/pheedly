import React from 'react';
import { Link } from 'react-router-dom'


class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.currentUser = this.props.currentUser
    this.toggleSidebar = this.toggleSidebar.bind(this)
    this.addContent = this.addContent.bind(this)
    this.sidebar = this.props.sidebar
  }

  componentDidMount() {
    let root = document.getElementById('root')
    let sidebar = document.getElementById("sidebar")
    // debugger
    root.style.height = `${this.props.screenSize.height}px`
    root.style.width = `${this.props.screenSize.width}px`
    if (this.sidebar) { 
      sidebar.style.height = `${this.props.screenSize.height - 50}px`
      sidebar.style.width = `${(this.props.screenSize.width) * 0.17}px`
    }
  }

  

  toggleSidebar(e) {
    e.preventDefault();
    let sidebar = document.getElementById("sidebar")
    let side_toggle = document.getElementsByClassName("sidebar-with-toggle")[0]
    let toggle = document.getElementsByClassName('toggle-sidebar')[0]
    let navbar = document.getElementsByClassName('header-group')[0]
    // debugger
    if (sidebar.className === "sidebar") {
      this.sidebar = false;
      sidebar.className = 'sidebar-hidden'
      toggle.firstChild.textContent = "+"
      toggle.style.marginLeft = "1em"
      navbar.firstChild.firstChild.style.marginLeft = '5em'
      side_toggle.style.width = "6%"
    } else {
      this.sidebar = true;
      sidebar.className = 'sidebar'
      toggle.firstChild.textContent = "⎼"
      toggle.style.marginLeft = "5em"
      navbar.firstChild.firstChild.style.marginLeft = '12em'
      // side_toggle.style.width = "200px"
      side_toggle.style.width = "17%"
    }
  }

  addContent() {
    console.log("i am gay")
  }
  
  render() {
    // debugger
    const active = () => (
    <div className='sidebar-with-toggle'>
      <div className="sidebar" id='sidebar'>
        <ul id='side-nav'>  
          <li><Link to='/'>home</Link></li>
          <li><Link to='/pheed/1'>pheeds</Link></li>
          <li><Link to='/articles'>finance</Link></li>
        </ul>
        <div className='add-content'>
          <button onClick={this.addContent}>Create Pheed</button>
        </div>
      </div>
      <div className='toggle-sidebar'>
          <button onClick={this.toggleSidebar}>⎼</button>
      </div>  
    </div>
    )
    const inactive = () => (
      <div></div>
    )
    return this.props.currentUser ? active() : inactive()
  }
}

export default Sidebar;