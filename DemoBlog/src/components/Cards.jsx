import React from 'react'
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


const Cards = () => {
  return (
    <div>
      <Card variant="outlined">
        <CardContent>
          <Typography level="title-md">Plain card</Typography>
          <Typography>Description of the card.</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Cards
