import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
const Navbar = () => {
  return (
    <div  className="App">
      <h1>Navbar </h1>
      <Link className='App' to="/">Home</Link>
      <Link className='App' to="/profile">Profile</Link>
      <Link className='App' to="/contact">Contact</Link>
      </div>
       
  )
}

export default Navbar