import { useState, useEffect } from 'react'
import Swal from 'sweetalert2';


export const useUsersGithub = (user) => {
    const [infoUser, setInfoUser] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getUser(user);
    }, [user]);

    const getUser = async (user) =>{
        setLoading(true)
        try {
            const res = await fetch(`https://api.github.com/users/${user}`);
            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `${user} no exists`,
                    icon: "error",
                });
            }
            setInfoUser(await res.json());
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Server Error!",
                text: error,
                icon: "error",
            });
        } finally {
            setLoading(false)
        }
    }
    return [infoUser, loading]
};