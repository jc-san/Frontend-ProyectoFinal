import React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '../Menu';
import {Link as RouterLink} from 'react-router-dom'
import Version from '../components/Version';

function NavBar() {
    return (
        <>
            <Box sx={{ p: 3, display: 'flex'}}>
                <AppBar component="nav" sx={{ backgroundColor:'#e62429' }}>
                    <Toolbar >
                        <Avatar
                            alt="#"
                            src="/logo.png"
                            sx={{ width: 150, height: 100}}
                            variant="square"
                            component={RouterLink} to={`/`}
                        />
                        <Box sx={{ flexGrow: 1 }}>
                            {Menu.map((item, index) => (
                                <Button key={index} component={Link} to={item.link} sx={{ color: 'white', }}>
                                    <b>{item.name}</b>
                                </Button>
                            ))}
                        </Box>
                        <Box>
                            <Version/>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default NavBar;
