import React from 'react'
import Form from '../../components/Form/Form';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Container } from 'react-bootstrap';

const ajuda = [
  {
      pergunta: "Como criar uma conta no blog?",
      resposta: "Clique no botão 'Cadastrar' no canto superior direito da página, preencha o formulário com seus dados e finalize clicando em 'Criar Conta'."
  },
  {
      pergunta: "Como publicar um post?",
      resposta: "Após fazer login, clique em 'Novo Post', preencha o título, o conteúdo e clique em 'Publicar'."
  },
  {
      pergunta: "Como editar ou excluir um post?",
      resposta: "Acesse sua lista de posts no perfil, clique no botão 'Editar' ou 'Excluir' ao lado do post que deseja modificar."
  },
  {
      pergunta: "Posso salvar posts como rascunho?",
      resposta: "Sim, enquanto estiver criando ou editando um post, você pode clicar em 'Salvar como Rascunho' para salvar sem publicar."
  }
];

function Sac() {
  return (
    <div>
      <Header />
      <Container>
      <h1>SAC</h1>
      <Form />

      <h2>Perguntas Frequentes</h2>

      {ajuda.map(ajuda => { // Sempre que for utilizar uma repetição no react, utilize o método ".map()"
        return (
          <div key={ajuda.pergunta}> {/* "key" é uma obrigação quando se utiliza o ".map()" */}
            <h3>{ajuda.pergunta}</h3>
            <p>{ajuda.resposta}</p>
          </div>
        );
      })}

      <Footer />
      </Container>
    </div>
  );
}

export default Sac;
