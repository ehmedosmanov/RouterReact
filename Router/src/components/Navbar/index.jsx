import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
         <Link to='/'>Home</Link>
         <Link to='/About'>About</Link>
         <Link to='/Contact'>Contact</Link>
         <Link to='/Login'>Login</Link>
    </nav>
  )
}

export default Navbar