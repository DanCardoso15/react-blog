import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1>Perfil do Usuário</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Users">Usuários</Link>
                </li>
                <li>
                    <Link to="/Sac">SAC</Link>
                </li>
                <li>
                    <Link to="/Sobre">Sobre</Link>
                </li>
                <li>
                    <Link to="/Login">Login</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;