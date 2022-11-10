import { Link } from "react-router-dom";

function NotFound() {
    return (
        <>
            <div className="">
                <div className="image-container-404">
                    <img src="/image-404.png" alt="Error - Página no encontrada" />
                </div>
                <p className="error-pageNotFound">
                    <span className="clr-dark-pink">Ooopsss! </span>
                    Recurso no encontrado.
                </p>
                <Link className="btn-default" to="/home">regresa al inicio</Link>
            </div>
        </>
    );
}

export default NotFound;