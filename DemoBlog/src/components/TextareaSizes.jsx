import * as React from 'react';
import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

export default function TextareaSizes() {
  return (
    <Box sx={{ display: 'flex',m:1, gap: 2, alignItems: 'center',width:'40ch', flexWrap: 'wrap' }}>
      <Textarea size="lg" name="Size" placeholder="Enter your Blog Content" sx={{width:'40ch'}}/>
    </Box>
  );
}
