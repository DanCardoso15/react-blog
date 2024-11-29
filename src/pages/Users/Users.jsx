import React from 'react'
import UserCard from '../../components/UserCard/UserCard';
import imgJoao from "../../assets/Joao.png";
import imgMaria from "../../assets/Maria.png";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useAuth } from "../../context/Auth";
import { Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function Users() {
  const { autenticado } = useAuth();

  if (!autenticado) return <Navigate to="/login" />;

  return (
    <div>
      <Header />
      <Container>
        <h1>Lista de Usuários</h1>
        <UserCard avatar={imgMaria} nome="Maria de Souza" idade={30} />
        <UserCard avatar={imgJoao} nome="João Guimarães" idade={45} ocupacao="Engenheiro Civil" /> {" "}
        {/* Quando não queremos passar uma propriedade que não é String/texto, usamos {chaves} entre o valor */}
        <Footer />
      </Container>
    </div>
  );
}

export default Users;
