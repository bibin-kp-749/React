import { useState } from 'react'
import './App.css'
import { Context } from './components/Context'
import CreateBlog from './pages/CreateBlog'
import Blogs from './pages/Blogs'
import { Route,Routes } from 'react-router-dom'

function App() {
  const[heading,setHeading]=useState("")
  const[content,setContent]=useState("")
  const[blogs,setBlogs]=useState([])
  

  return (
    <>
    
    <Context.Provider value={{heading,setHeading,content,setContent,blogs,setBlogs}}>
    <Routes>
      <Route path='/' element={<CreateBlog/>}/>
      <Route path='/new' element={<Blogs/>}/>
      </Routes>
    </Context.Provider>
    
    </>
  )
}

export default App
