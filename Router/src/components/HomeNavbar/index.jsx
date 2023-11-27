import React from 'react'
import { Link } from 'react-router-dom'

const HomeNavbar = () => {
  return (
    <nav>
         <Link to='/'>NavbarHome</Link>
         <Link to='/About'>About</Link>
         <Link to='/Contact'>Contact</Link>
         <Link to='/Login'>Login</Link>
    </nav>
  )
}

export default HomeNavbar