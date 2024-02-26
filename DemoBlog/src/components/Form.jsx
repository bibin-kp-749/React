import React, { useContext } from 'react'
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import { Context } from './Context';

const Form = () => {
  const{blogs,setBlogs,heading,setHeading,content,setContent}=useContext(Context)
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">Heading</label>
      <Input placeholder="Type in here…" value={heading} onChange={(event)=>{
        setHeading(event.target.value)
      }}/>
      </div>
      <div>
      <Textarea
          placeholder="Try to submit with no text!"
          value={content}
          onChange={event=>{
            setContent(event.target.value)
          }}
          required
          sx={{ mb: 1 }}
        />
      </div>
      <div>
      <Button variant="outlined" onClick={()=>{
        setContent("")
        setHeading("")
        setBlogs([...blogs,{heading:heading,content:content}])
      }}>Submit</Button>
      </div>
        
      </form>
    </div>
  )
}

export default Form
