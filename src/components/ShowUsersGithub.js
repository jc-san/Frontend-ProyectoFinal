
import Participante from "./UserGithub";

import React from 'react'
import Cargando from '../styled-components/Cargando'
import { useUsersGithub } from "../hooks/useUsersGithub";

const ShowParticipantes = ({ usuario, nombre }) => {
    const [infoUser, loading] = useUsersGithub(usuario);

    if (loading) {
        return <Cargando />
    }
    return (

        <Participante className="item" key={infoUser.id} data={infoUser} name={nombre}/>
    )
}


export default ShowParticipantes;