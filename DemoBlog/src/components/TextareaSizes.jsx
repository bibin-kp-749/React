import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';
import { BlogContext } from './BlogContext';

export default function TextareaSizes() {
  const value=React.useContext(BlogContext)
  return (
    <Box sx={{ display: 'flex',m:1, gap: 2, alignItems: 'center',width:'40ch', flexWrap: 'wrap' }}>
      <Textarea size="lg" name="Size" placeholder="Enter your Blog Content" sx={{width:'40ch'}} onChange={e=>value.setContent(e.target.value)}/>
    </Box>
  );
}
