import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { BlogContext } from './BlogContext';

 function BlogCard({heading,name}) {
  console.log("hello")
  return (
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardActionArea>
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="div">
    //         {heading}
    //       </Typography>
    //       <Typography variant="body2" color="text.secondary">
    //         {name}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
    <>
    <h1>{heading}</h1>
    <p>{name}</p>
    </>
  );
}
export default BlogCard