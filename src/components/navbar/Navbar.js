import React from 'react'
import Logo from './Logo';
import User from './User';
import '../../style/navbar.css';
const Navbar = () => {
  return (
    <div id='Navbar' className="d-flex flex-row">
        <Logo />
        <User />
    </div>
  )
}

export default Navbar