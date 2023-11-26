import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    
  )
}

export default App