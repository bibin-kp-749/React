import React from 'react'
import InputField from './InputField'
import TextareaSizes from './TextareaSizes'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

function Form() {
    const navigate=useNavigate()
  return (
    <div>
      <form action="">
         <InputField/>
        <TextareaSizes/>
        <Stack direction="row"  style={{padding:"9px" }}>
      <Button variant="outlined" style={{width:'20ch'}} onClick={()=>navigate('Blog')}>Primary</Button>
       </Stack> 
      </form>
    </div>
  )
}

export default Form
