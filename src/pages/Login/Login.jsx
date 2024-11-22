// import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";

function Login() {

    // const[dados, setDados] = useState({ email: "", senha: ""}); // Criação do Evento


    // function enviarFormulario(event) { // Função "enviarFormular", será executado sempre que o formulário for submetido
    //     event.preventDefault(); // "preventDefault" para a execução do Default, impedindo que a página recarregue
    //     console.log("Formulário enviado.");
    //     console.log(dados);
        
    // }

    // function alterarFormulario(event) {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setDados({
    //         ...dados, [name]: value
    //     });
    // }

    const { handleSubmit, register } = useForm();
    
    function enviarFormular(dados) {
        console.log("Formulário enviado.");
        console.log(dados);
    }

    return (
        <div>
            <Header />
            <h1>Login</h1>

            <form onSubmit={handleSubmit(enviarFormular)} /* onSubmit={enviarFormulario} */> 
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register("email", { 
                        required: true, 
                        minLength: 10, 
                        pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        })} /* onChange={alterarFormulario}*/ autoComplete="off" /> {/* "required: true" Torna o preenchimento do campo obrigatório */}
                </div>

                <div>
                    <label htmlFor="senha">Senha:</label>
                    <input type="password" id="senha" {...register("senha", { required: true, maxLength: 15 })} /* onChange={alterarFormulario} */ />
                </div>

                <button>
                    Entrar
                </button>
            </form>
        </div>
    );
}

export default Login;

// Sempre que precisar de um formulário, utilize a tag "form"