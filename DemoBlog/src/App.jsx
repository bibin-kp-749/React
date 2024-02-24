import './App.css'
import Blog from './pages/Blog'
import Blogs from './pages/Blogs'
import CreateBlog from './pages/CreateBlog'
import { Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<CreateBlog/>}/>
    <Route path='/Blog' >
    <Route index element={<Blogs/>}/>
    <Route path='Blog/:id' element={<Blog/>}/>
    </Route>
    </Routes>
    </>
  )
}

export default App
