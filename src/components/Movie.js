import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'

const Movie = ({movie =""}) => {
    const {title,poster_path,overview,id} = movie
    const urlImg = `https://image.tmdb.org/t/p/original${poster_path}`
    return (
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea component={RouterLink} to={`movie/${id}`}>
            <CardMedia
              component="img"
              height="300"
              image= {urlImg}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {overview}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default Movie