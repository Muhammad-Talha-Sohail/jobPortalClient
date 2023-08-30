import React from 'react'
import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login/Login'
import Singup from './components/Singup/Singup'
import Home from './components/Home/Home'
import JobPortal from './components/JobPortal/JobPortal'
import { Input } from '@mui/material'
import Fields from './components/Inputfields/Fields'
import UserPost from './components/UserPosts/UserPost'
import Navbar from './components/NavBar/Navbar'

const App = () => {
  return (
   <>  

   <BrowserRouter>
   
   <Routes>
    
    <Route path="/" element={<Login />}></Route>
    <Route path="/Signup" element={<Singup />}></Route>
    <Route path="/Home" element={<Home />}></Route>
    <Route path="/jobPost" element={<JobPortal />}></Route>
    <Route path="/userPost" element={<UserPost />}></Route>
   <Route path="/Fields" element={<Fields />}  ></Route>
   </Routes>
   </BrowserRouter>
   </>

  
  )
}

export default App