import React from 'react'
import UserCard from '../../components/UserCard/UserCard';
import imgJoao from "../../assets/Joao.png";
import imgMaria from "../../assets/Maria.png";
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Users() {
  return (
    <div>
      <Header />
      <h1>Lista de Usuários</h1>
      <UserCard avatar={imgMaria} nome="Maria de Souza" idade={30} />
      <UserCard avatar={imgJoao} nome="João Guimarães" idade={45} ocupacao="Engenheiro Civil" />{" "}
      {/* Quando não queremos passar uma propriedade que não é String/texto, usamos {chaves} entre o valor */}
      <Footer /> 
    </div>
  );
}

export default Users;
