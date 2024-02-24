import React from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const navigate=useNavigate()
  return (
    <div>
      <form action="" className='login-form'>
        <h1>Login Page</h1><br />
        <div>
            <label htmlFor="">E-MAIL</label><br />
            <input type="text" name='' id='' placeholder='Enter Your E-Mail' className='login-input'/>
        </div><br />
        <div>
            <label htmlFor="">PASSWORD</label><br />
            <input type="password" name='' id='' placeholder='Enter Your Password' className='login-input' />
        </div>
        <div className='button'>
           <input type="submit" value="Login" onClick={()=>navigate('/Home')} className='login-submit'/>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
