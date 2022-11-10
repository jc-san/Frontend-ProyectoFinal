

import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

export const useMovieDetails = (id) => {
    const [InfoMovie, setInfoMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const URL = 'https://api.themoviedb.org/3/movie'
    const URL_PARAMS = 'api_key=3083c8858744c8f5ad199d7bfa37ea15&language=es'

    useEffect(() => {
        getData(id);
    }, [id]);

    const getData = async (user) =>{
        setLoading(true)
        try {
            const res = await fetch(`${URL}/${id}?${URL_PARAMS}`,)
            if (!res.ok) {
                return Swal.fire({
                    title: "Error!",
                    text: `No existen información`,
                    icon: "error",
                });
            } else {
                const data = await res.json();
                setInfoMovie(normalizeDataAPI(data));
            }            
        } catch (error) {
            return Swal.fire({
                title: "Server Error!",
                text: 'Problemas al consultar información',
                icon: "error",
            });
        } finally {
            setLoading(false)
        }
    }

    const normalizeDataAPI = (element) => {
        const generos = element?.genres?.map(e => ` ${e.name}`).join();
    
        return {
          titulo: element?.title || '',
          descripcion: element?.overview || '0',
          popularidad: (element?.vote_average/2) || 0,
          poster: `https://image.tmdb.org/t/p/original/${element?.poster_path}` || '',
          informacion: `${element?.release_date} min | ${element?.runtime} min | ${generos} ` || '0',
        }
    }

    return [InfoMovie, loading]
};