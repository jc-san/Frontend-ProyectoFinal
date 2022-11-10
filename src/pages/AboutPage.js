import React from 'react';
import ShowParticipantes from '../components/ShowParticipantes' 
import Participante from '../Participantes';

import { Typography } from '@mui/material';


function AboutPage() {
    return (

        <>
            <Typography variant="h3" align='center' sx={{ pt: 10, pb:7}}>
                About
            </Typography>


            {Participante.map((item)=> (
                <ShowParticipantes nombre={item.name} usuario={item.user}  margin="normal"/>
            ))
            }
        </>
    );
}

export default AboutPage;