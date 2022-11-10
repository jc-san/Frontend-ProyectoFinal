import React from 'react';
import ShowUsers from '../components/ShowUsersGithub' 
import Participante from '../Participantes';
import Sensei from '../Senseis';


import { Typography } from '@mui/material';


function AboutPage() {
    return (
        <>
            <Typography variant="h3" align='center' sx={{ pt: 10, pb:7}}>
                About
            </Typography>

            <Typography variant="h5" gutterBottom>
                Proyecto Final Kata 5 - Frontend:
            </Typography>
            
            <Typography variant="body1" gutterBottom sx={{pt: 2, pb:2}}>
                El presente proyecto es un catálogo de películas de Marvel, donde se obtiene la información de cada película de la API api.themoviedb.org.            
            </Typography>
            <Typography variant="h6" gutterBottom >
                Participantes del proyecto: 
            </Typography>
            <div className="wrapper-user">
                {Participante.map((item)=> (
                    <ShowUsers nombre={item.name} usuario={item.user}/>
                ))}
            </div>
            <Typography variant="h6" gutterBottom> 
                Senseis: 
            </Typography>
            <div className="wrapper-user">
                {Sensei.map((item)=> (
                    <ShowUsers nombre={item.name} usuario={item.user}/>
                ))}
            </div>

        </>
    );
}

export default AboutPage;