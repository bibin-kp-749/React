import React, { useContext, useState } from 'react'
import InputField from './InputField'
import TextareaSizes from './TextareaSizes'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { BlogContext } from './BlogContext';
import BlogCard from './BlogCard';
import Blogs from '../pages/Blogs';

function Form() {
    const navigate=useNavigate()
    const value=useContext(BlogContext)
    const EventHandler=()=>{
      value.setMain([...value.main,{id:Date.now(),heading:value.heading,content:value.content}])
      console.log(value);
      navigate('Blog')
    }
  return (
    <div>
      <form action="">
         <InputField/>
        <TextareaSizes/>
        <Stack direction="row"  style={{padding:"9px" }}>
      <Button variant="outlined" style={{width:'20ch'}} onClick={EventHandler}>
        Primary</Button>
       </Stack> 
      </form>
      {/* {
        value.main.map((e)=>{
          <Blogs value={value}/>
        })
      } */}
    </div>
  )
}

export default Form
