import React from 'react'
import Welcome from '../Components/Welcome'
import Inputfield from '../Components/Inputfield'
import '../App.css'

const RegistrationPage = () => {
  return (
    <div id='registration-page'>
      <div><Welcome/></div>
      <div><Inputfield/></div>
    </div>
  )
}

export default RegistrationPage
