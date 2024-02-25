import './App.css'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import CreateBlog from './pages/CreateBlog'
import { Route,Routes } from 'react-router-dom'
import { BlogContext } from './components/BlogContext'
import { useState } from 'react'

function App() {
  const [heading,setHeading]=useState("")
  const[content,setContent]=useState("")
  const [main,setMain]=useState([])

  return (
    <>
    <BlogContext.Provider value={{heading,setHeading,content,setContent,main,setMain}}>
    <Routes>
    <Route path='/' element={<CreateBlog/>}/>
    <Route path='/Blog' >
    <Route index element={<Blogs/>}/>
    <Route path='Blog/:id' element={<Blog/>}/>
    </Route>
    </Routes>
    </BlogContext.Provider>
    </>
  )
}

export default App
