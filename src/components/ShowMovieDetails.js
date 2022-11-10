import Cargando from '../styled-components/Cargando'
import { useMovieDetails } from "../hooks/useMovieDetails";
import MovieDetails from "./MovieDetails";


const ShowMovieDetails = ({id})  => {
    const [infoMovie, loading] = useMovieDetails(id);

    if (loading) {
        return <Cargando />
    }
    return (
        <MovieDetails className="item" dataMovie={infoMovie}/> 
    )
}


export default ShowMovieDetails;