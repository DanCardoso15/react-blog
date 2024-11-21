import { Link } from "react-router-dom";

function NotFound () {
    return (
        <div>
            <h1>Oops! - Erro 404</h1>
            <p>Página não encontrada</p>
            <p>
                <Link to="/">Clique aqui</Link> para voltar para a página principal.
            </p>
        </div>
    );
}

export default NotFound;