import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import RegistrationPage from './Pages/RegistrationPage'
import LoginPage from './Pages/LoginPage'
import HomePage from './Pages/HomePage'

function App() {

  return (
  <>
    <Routes>
    <Route path='/' element={<RegistrationPage/>}/>
    <Route path='Login/:id'  element={<LoginPage/>}/>
    <Route path='/Home' element={<HomePage/>}/>
    </Routes>
    </>
  )
}

export default App
