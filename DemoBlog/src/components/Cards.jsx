import React from 'react'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { useContext } from 'react';
import { Context } from './Context';
import { Link, Outlet } from 'react-router-dom';

const Cards = () => {
  const{blogs}=useContext(Context)
  return (
    <>
    {
      blogs.map((element)=>{
        return(
          <div key={element.id}>
            <Link to={`${element.id}`}>
      <Card variant="outlined">
        <CardContent>
          <Typography level="title-md">{element.heading}</Typography>
          <Typography>{element.content}</Typography>
        </CardContent>
      </Card>
      </Link>
      
    </div>
        )
      })
    }
    </>
    
  )
}

export default Cards
