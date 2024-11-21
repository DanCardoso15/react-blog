import { useState } from "react";

function Form() {
    const [nome, setNome] = useState(""); // O que está sendo feito aqui representa um "estado" -> Guarda a informação 

    function enviarFormulario() {
        window.alert("Formulário enviado.");
    }

    function lidarMudancaNome(event) {
        const valor = event.target.value;
        setNome(valor);
    }

    return (
      <form style={{ padding: "20px" }}>
        <p>{nome}</p>

        <label htmlFor="nome">Nome</label> <br />
        <input type="text" id="nome" onChange={lidarMudancaNome} /> <br />

        <label htmlFor="email">Email</label> <br />
        <input type="Email" id="Email" /> <br />

        <label htmlFor="mensagem">Mensagem</label> <br />
        <input type="text" id="mensagem" /> <br />

        <button type="button" onClick={enviarFormulario}>Enviar</button>
      </form> 
    );
}

export default Form;

// Para ver a lista de eneventos basta digitar "on" e o comando "Ctrl + espaço" 