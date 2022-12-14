import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Participante = ({name="", data}) => {
    return (
        <Card sx={{ maxWidth: 200}}>
          <CardActionArea href={data.html_url} target="_blank">
            <CardMedia
              component="img"
              height="auto"
              image= {data.avatar_url}
              alt="no hay fotrafia"
            />
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default Participante