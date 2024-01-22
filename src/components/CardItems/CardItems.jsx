import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function CardItems({ itemsData }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={itemsData.img}
          alt={itemsData.painting}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {itemsData.painting}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>Thecnic: {itemsData.category}</p> <br />
            <p>Stock: {itemsData.stock}</p><br />
            <p>Price: {itemsData.price}usd</p>           
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
