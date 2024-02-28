import { useState } from 'react'
import './App.css'
import { Context } from './components/Context'
import CreateBlog from './pages/CreateBlog'
import Blogs from './pages/Blogs'
import { Route,Routes } from 'react-router-dom'
import IndividualBlog from './pages/IndividualBlog'

function App() {
  const[heading,setHeading]=useState("")
  const[content,setContent]=useState("")
  const[blogs,setBlogs]=useState([])
  // console.log(blogs);
  

  return (
    <>
    
    <Context.Provider value={{heading,setHeading,content,setContent,blogs,setBlogs}}>
    <Routes>
      <Route path='/' element={<CreateBlog/>}/>
      <Route path='blog' element={<Blogs/>}/>
      <Route path='blog/:id' element={<IndividualBlog/>}/>
      </Routes>
    </Context.Provider>
    
    </>
  )
}

export default App
