import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BlogContext } from './BlogContext';

export default function InputField() {
  const value=React.useContext(BlogContext)
  return (
    <>
    <Box
      component=""
      sx={{
        '& .MuiTextField-root': { m: 1, width: '40ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-textarea"
          label=" Blog Title"
          placeholder="Placeholder"
          size='medium'
          multiline
          onChange={e=>value.setHeading(e.target.value)}
        />
      </div>
    </Box>
    </>
  );
}
