// import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "../../components/Header/Header";
import { login, loginGoogle } from "../../firebase/authentication";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth";
import { Button } from "react-bootstrap";

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
    const navigate = useNavigate();
    const { setAutenticado } = useAuth();
    
    async function enviarFormular({ email, senha }) {
        try{
            await login(email, senha);
            setAutenticado(true);
            navigate("/"); // Home
        } catch (erro) {
            if(erro.code == "auth/invalid-credential") {
                window.alert("Email ou Senha inválidos.");
            } else {
                window.alert("Algo deu errado.");
            }
            console.error({...erro});
        }
    }

    async function entrarComGoogle() {
        try {
            const usuario = await loginGoogle();
            console.log(usuario);
            setAutenticado(true);
            navigate("/")
        } catch(erro) {
            console.error(erro);
            window.alert("Algo deu errado.")
        }
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

                <Button type="submit" variant="dark">
                    Entrar
                </Button>

                <Button variant="danger" type="button" onClick={entrarComGoogle}> 
                    Entrar com Google
                </Button>
            </form>
        </div>
    );
}

export default Login;

// Sempre que precisar de um formulário, utilize a tag "form"