import React from 'react'
import { Link } from 'react-router-dom'
import user from './../images/user.png'
import "./Header.scss"
import Button from 'react-bootstrap/Button'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
        <div className="logo">Star Movies</div>
      </Link>
      <div className='right-items'>
      <Link className='watchlist-link' to='/watchlist'>
        <Button variant="outline-light">Watchlist</Button>
      </Link>
      <div className='user-image'>
        <img src={user} alt="user" />
      </div>
      </div>
    </div>
  )
}

export default Header