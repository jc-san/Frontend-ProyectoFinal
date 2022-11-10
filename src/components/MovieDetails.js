import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button, CardHeader, Rating } from '@mui/material';
import { Link } from 'react-router-dom';


const MovieDetails = ({dataMovie}) => {       
    return (
        <>
        <Card sx={{ display: 'flex'}}>
            <CardMedia component="img" sx={{ width: 301 }} image={dataMovie.poster} alt={"No img"}/>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardHeader title={dataMovie.titulo} subheader={dataMovie.informacion} />
            <CardContent>
                <Rating name="simple-controlled" readOnly value={dataMovie.popularidad}/>
                <Typography variant="subtitle1" color="text.secondary" component="div">{dataMovie.descripcion}</Typography>
            </CardContent>
            </Box>
        </Card> 
        <Box sx={{ display: 'flex', flexDirection: 'column', pt: 5 }}>
            <Button variant="contained" disableElevation  component={Link} to={`../`}> Regresar </Button>            
        </Box>
        </>
      );
}

export default MovieDetails