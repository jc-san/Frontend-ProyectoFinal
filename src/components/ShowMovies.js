import Movie from "./Movie";


import React from 'react'
import Cargando from '../styled-components/Cargando'
import { useMovies } from "../hooks/useMovies";


const ShowMovies = ({id}) => {
    const [movies, loading] = useMovies(id);

    if (loading) {
        return <Cargando/>
    }
  return (
 
    <div className="wrapper">
        {movies.map((item) => (
            <Movie className="item" key={item.id} movie={item} />
        ))}

    </div>
        
  )
}

export default ShowMovies