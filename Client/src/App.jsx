
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css'
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import { useEffect, useState } from 'react'
import Profile from './Component/Profile'
import axios from 'axios'

function App() {
  

  return (
    <div>
     <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile'element={<Profile/>}/>
        </Routes>
       </Router>
    </div>
  )
}

export default App
