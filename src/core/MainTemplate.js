import '../App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Container from '@mui/material/Container';

import NavBar from './NavBar';
import Home from '../pages/Home';
import AboutPage from '../pages/AboutPage';
import NotFound from '../pages/NotFound';


function MainTemplate() {

  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar/>
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default MainTemplate;
