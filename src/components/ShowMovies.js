import Movie from "./Movie";

import React from 'react'
import Cargando from '../styled-components/Cargando'
import { useMovies } from "../hooks/getMovies";

const ShowMovies = ({id}) => {
    const [movies, loading] = useMovies(id);

    if (loading) {
        return <Cargando/>
    }
  return (
    <div className="row mt-2">
        {movies.map((item) => (
            <Movie key={item.id} movie={item} />
        ))}
    </div>
  )
}

export default ShowMovies