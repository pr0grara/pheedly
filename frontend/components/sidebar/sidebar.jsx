import React from 'react';
import { Link } from 'react-router-dom'


class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.currentUser = this.props.currentUser
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar() {
    // e.preventDefault();
    let sidebar = document.getElementById("sidebar")
    let side_toggle = document.getElementsByClassName("sidebar-with-toggle")[0]
    let toggle = document.getElementsByClassName('toggle-sidebar')[0]
    let navbar = document.getElementsByClassName('header-group')[0]
    // debugger
    if (sidebar.className === "sidebar") {
      sidebar.className = 'sidebar-hidden'
      toggle.firstChild.textContent = "+"
      toggle.style.marginLeft = "1em"
      navbar.firstChild.firstChild.style.marginLeft = '5em'
      side_toggle.style.width = "5%"
    } else {
      sidebar.className = 'sidebar'
      toggle.firstChild.textContent = "_"
      toggle.style.marginLeft = "5em"
      navbar.firstChild.firstChild.style.marginLeft = '12em'
      side_toggle.style.width = "20%"
    }
  }
  
  render() {
    // debugger
    const active = () => (
    <div className='sidebar-with-toggle'>
      <div className="sidebar" id='sidebar'>
        <div className='home'>
          <Link to='/'>home</Link>
        </div>
        <div className='pheeds'>
          <Link to='/pheed/1'>pheeds</Link>
        </div>
          <Link to='/articles'>finance</Link>
      </div>
      <div className='toggle-sidebar'>
        <button onClick={this.toggleSidebar}>_</button>
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