import React, { useState } from 'react'
import "./App.css"
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Contact from './pages/Contact'

const App = () => {
  const [username,setUsername] = useState("");
  return (
    <Router >
      <Navbar />
        <Routes>
            <Route path='/' element={<Home username={username} />} />
            <Route path='/profile' element={<Profile username={username} setUsername={setUsername}/>} />
            <Route path='/contact' element={<Contact  username={username}/>} />
        </Routes>
      </Router>
    
  )
}

export default App