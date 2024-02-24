import React from 'react'
import Form from '../components/Form'
import { BlogContext } from '../components/BlogContext'

const CreateBlog = () => {
  return (
    <div>
      <BlogContext.Provider >
      <Form/>
      </BlogContext.Provider>
    </div>
  )
}

export default CreateBlog
