import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <Header />
        <Container>
          <h1>Oops! - Erro 404</h1>
          <p>Página não encontrada</p>
          <p>
            <Link to="/">Clique aqui</Link> para voltar para a página principal.
          </p>
        </Container>
        <Footer />
    </div>
  );
}

export default NotFound;