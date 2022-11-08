import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Menu from '../Menu';

function NavBar() {
    return (
        <>
            <Box sx={{ p: 3, display: 'flex' }}>
                <AppBar component="nav">
                    <Toolbar>
                        <Typography variant="h5" sx={{ flexGrow: 1 }}>
                            Proyect Name
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}>
                            {Menu.map((item, index) => (
                                <Button key={index} component={Link} to={item.link} sx={{ color: 'white', }}>
                                    <b>{item.name}</b>
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default NavBar;
