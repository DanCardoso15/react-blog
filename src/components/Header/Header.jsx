import { Link } from "react-router-dom";
import { logout } from "../../firebase/authentication";
import { useAuth } from "../../context/Auth";
import { Button, Container, Nav, Navbar } from "react-bootstrap";



function Header() {

  const { autenticado } = useAuth();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="nav-link" >Home</Link>
          <Link to="/Users" className="nav-link" >Usuários</Link>
          <Link to="/Sac" className="nav-link" >SAC</Link>
          <Link to="/Sobre" className="nav-link" >Sobre</Link>
          <Link to="/Login" className="nav-link" >Login</Link>
          <Link to="/Signup" className="nav-link" >Signup</Link>
          <Button onClick={() => logout()}>Sair</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
