// import { useState } from "react";
import { useForm } from "react-hook-form";

function Form() {
  // const [nome, setNome] = useState(""); // O que está sendo feito aqui representa um "estado" -> Guarda a informação

  // function enviarFormulario() {
  //     window.alert("Formulário enviado.");
  // }

  // function lidarMudancaNome(event) {
  //     const valor = event.target.value;
  //     setNome(valor);
  // }

  const { handleSubmit, register } = useForm();

  function enviarFormulario(dados) {
    console.log("Formulário enviado.");
    console.log(dados);
  }

  return (
    <form onSubmit={handleSubmit(enviarFormulario)} style={{ padding: "20px" }}>
      
      <div>
        <label htmlFor="nome">Nome</label> <br />
        <input type="text" id="nome" {...register("nome", {
            required: true,
          })} /* onChange={lidarMudancaNome} */
        />
      </div>

      <div>
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" {...register("email", {
            required: true,
            minLength: 10,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
        />
      </div>

      <div>
        <label htmlFor="mensagem">Mensagem</label> <br />
        <input type="text" id="mensagem" {...register("mensagem", {
            required: true,
            maxLength: 180,
          })}
        />
      </div>

      <button /* onClick={enviarFormulario} */>Enviar</button>
    </form>
  );
}

export default Form;

// Para ver a lista de eneventos basta digitar "on" e o comando "Ctrl + espaço"
