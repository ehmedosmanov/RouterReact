import React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-items'>
            <li className='navbar-item'><Link to={'/Shop'} className='navbar-link' href="#">Shop</Link></li>
            <li className='navbar-item'><Link to={'/About'} className='navbar-link' href="#">About</Link></li>
            <li className='navbar-item'><Link to={'/Contact'} className='navbar-link' href="#">Contact</Link></li>
            <li className='navbar-item'><Link to={'/Login'} className='navbar-link' >Login</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar