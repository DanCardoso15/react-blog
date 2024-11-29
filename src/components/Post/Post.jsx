import { useState } from "react";
import Titulo from "../Titulo/Titulo";
import { editarPst, removerPst } from "../../firebase/firestore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Post(props) {
  const [curtidas, setCurtidas] = useState(0); // [estado, funcao modificadora]
  const [descurtidas, setDescurtidas] = useState(0);

  async function removerPost() {
    await removerPst(props.id);
    props.buscarPosts();
  }

  async function editarPost() {
    const titulo = window.prompt("Digite o tiulo", props.titulo);
    if (titulo) {
      await editarPst(props.id, { titulo });
      props.buscarPosts();
    }
  }

  function adicionarCurtida() {
    setCurtidas(curtidas + 1);
  }

  return (
    <div className="post">
      <Card style={{ width: "22rem" }}>
        <Card.Header as="h5">{props.titulo}</Card.Header>

        <Card.Body>
          <Card.Img src={props.imagem} alt="Publicação" />

          <Card.Text>{props.conteudo}</Card.Text>
          <Card.Text>
            <small className="fw-bold">{props.autor}</small>
          </Card.Text>

          <Button
            variant="outline-secondary"
            size="sm"
            onClick={adicionarCurtida}
          >
            Curtidas: {curtidas}
          </Button>

          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => {
              setDescurtidas(descurtidas + 1);
            }}
          >
            Descurtidas: {descurtidas}
          </Button>

          <Button
            variant="outline-secondary"
            size="sm"
            onClick={() => {
              window.alert(props.conteudo);
            }}
          >
            Detalhes
          </Button>

          <Button variant="outline-secondary" size="sm" onClick={removerPost}>
            Excluir
          </Button>

          <Button variant="outline-secondary" size="sm" onClick={editarPost}>
            Editar
          </Button>

          {curtidas > 10 ? <p>Post Popular!</p> : null}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Post;
