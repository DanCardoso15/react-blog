import React from 'react'
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Container } from 'react-bootstrap';

function Sobre() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Header />
      <Container className="flex-grow-1">
        <h1>Sobre o Blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          ipsum, illo consequatur distinctio repellat consectetur fuga ea
          quisquam quibusdam, ratione numquam repudiandae, laboriosam dolore
          deserunt! Quia quas repellendus iste maxime!
        </p>
        <Footer />
      </Container>
    </div>
  );
}

export default Sobre;