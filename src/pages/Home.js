import React from 'react';
import ShowMovies from '../components/ShowMovies' 
import { Typography } from '@mui/material';
function Home() {
    return (
        <>
            <Typography variant="h3" align='center'>
                Home
            </Typography>
            
            <ShowMovies id={1} margin="normal"/>
        </>
    );
}

export default Home;