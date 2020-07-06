import React from 'react';
import { Link } from 'react-router-dom'


class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarState: "sidebar"
    }
    this.currentUser = this.props.currentUser
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  toggleSidebar(e) {
    e.preventDefault();
    if (this.state.sidebarState === "sidebar") {
      this.state.sidebarState = "sidebar-hidden"
    } else {
      this.state.sidebarState = "sidebar"
    }
  }
  
  render() {
    const active = () => (
      <div className={`${this.state.sidebarState}`}>
        <div className='sidebar-links'>
          <Link to='/'>home</Link>
          <a>pheed</a>
          <Link to='/articles'>finance</Link>
        </div>
        <form onSubmit={this.toggleSidebar}>
          <input type="submit" value="x" />
        </form>
      </div>
    )
    const inactive = () => (
      <div></div>
    )
    return this.currentUser ? active() : inactive()
  }
}

export default Sidebar;