import React from 'react';
import { Link } from 'react-router-dom'

const Sidebar = ({currentUser}) => {
  const active = () => (
    <div className='sidebar'>
      <Link to='/'>home</Link>
      <a>pheed</a>
      <Link to='/articles'>finance</Link>
    </div>
  )
  const inactive = () => (
    <div></div>
  )
 return currentUser ? active() : inactive()
}

export default Sidebar;