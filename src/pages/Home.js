import React from 'react';
import ShowMovies from '../components/ShowMovies' 
function Home() {
    return (
        <>
            <h1>Home</h1>
            <ShowMovies id={1} margin="normal"/>
        </>
    );
}

export default Home;