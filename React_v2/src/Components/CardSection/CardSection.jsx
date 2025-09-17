import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardSection.css'
import IguanaLocal from '../../assets/iguana.jpg'

export default function CardSection() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
      component={"img"}
        // sx={{ height: 140 }}
        image= {IguanaLocal}
        title="green iguana"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lagartos son un grupo ampliamente distribuido de reptiles escamosos, 
          con más de 6,000 especies, que se encuentran en todos los continentes excepto en la Antártida.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Compartir</Button>
        <Button size="small">Leer Más</Button>
      </CardActions>
    </Card>
  );
}
