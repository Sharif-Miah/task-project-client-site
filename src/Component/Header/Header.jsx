import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <Link to='/home'>Home</Link>
        <Link to='/home'>About</Link>
        <Link to='/home'>Add product</Link>
        <Link to='/home'>All product</Link>
        <Link to='/home'>Remove Product</Link>

    </div>
  )
}

export default Header