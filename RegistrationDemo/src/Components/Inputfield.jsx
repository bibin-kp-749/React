import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Inputfield = () => {
    const navigate=useNavigate()
  return (
    <div>
      <form action="" className='form'>
      <h1 >REGISTER</h1><br /><br />
        <div className='fields'>
            <label htmlFor="">NAME:</label><br />
            <input type="text" name="" id="" placeholder='Enter Your Name' className='input'/>
        </div>
        <div className='fields'>
            <label htmlFor="">E-MAIL</label><br />
            <input type="text" name='' id='' placeholder='Enter Your E-Mail' className='input'/>
        </div>
        <div className='fields'>
            <label htmlFor="">PASSWORD</label><br />
            <input type="password" name='' id='' placeholder='Enter Your Password' className='input'/>
        </div>
        <div className='button'>
           <input type="submit" value="SUBMIT" onClick={()=>navigate('Login/:id')} className='submit'/>
        </div>
      </form>
    </div>
  )
}

export default Inputfield
