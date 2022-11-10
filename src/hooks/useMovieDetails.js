

import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';

export const useMovieDetails = (id) => {
    const [InfoMovie, setInfoMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const URL = 'https://api.themoviedb.org/3/movie'
    const URL_PARAMS = 'api_key=3083c8858744c8f5ad199d7bfa37ea15&language=es'

    useEffect(() => {
        getData(id);
    }, [id]);

    const getData = async (idMovie) =>{
        setLoading(true)
        try {
            const res = await fetch(`${URL}/${idMovie}?${URL_PARAMS}`,)
            if (!res.ok) {
                return Swal.fire({
                    title: "Error!",
                    text: `No existen información`,
                    icon: "error",
                });
            }
            const data = await res.json();
            const generos = data?.genres?.map(e => ` ${e.name}`).join();
            setInfoMovie({
                titulo: data?.title || '',
                descripcion: data?.overview || '0',
                popularidad: (data?.vote_average/2) || 0,
                poster: `https://image.tmdb.org/t/p/original/${data?.poster_path}` || '',
                informacion: `${data?.release_date} min | ${data?.runtime} min | ${generos} ` || '0',
            });
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

    return [InfoMovie, loading]
};