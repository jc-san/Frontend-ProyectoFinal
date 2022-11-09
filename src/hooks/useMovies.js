import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';


export const useMovies = (id) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const API_KEY = 'dc218bef31b94aab191090c157f2930d'
    useEffect(() => {
        getMoviesF(id);
    }, [id]);

    const getMoviesF = async (id) =>{
        setLoading(true)
        try {
            const res = await fetch(`https://api.themoviedb.org/3/list/${id}?api_key=${API_KEY}&language=es`);
            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `${id} no exist`,
                    icon: "error",
                });
            }
            const data = await res.json();
            setMovies([...data.items]);
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Server Error`,
                icon: "error",
            });
        } finally {
            setLoading(false)
        }
    }
    return [movies, loading]
};