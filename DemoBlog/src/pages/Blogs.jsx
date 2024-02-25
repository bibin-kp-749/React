import React, { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import { BlogContext } from '../components/BlogContext'

const Blogs = () => {
  const value=useContext(BlogContext)
  return (
    <>
    {
      value.main.map((e)=>{
        <BlogCard value={{heading:e.heading,content:e.content}}/>  
      })
    }
     </> 
  )
}

export default Blogs
