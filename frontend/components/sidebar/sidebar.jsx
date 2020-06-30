import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = ({currentUser}) => {
  const active = () => (
    <nav className='sidebar'>
      <Link to='/articles'>Articles</Link>
      <Link to='/'>Home</Link>
    </nav>
  )
  const inactive = () => (
    <div></div>
  )
 return currentUser ? active() : inactive()
}

export default Sidebar;