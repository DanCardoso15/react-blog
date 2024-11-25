import { useForm } from "react-hook-form";
import { buscar, salvar } from "../../firebase/firestore";
import { useEffect, useState } from "react";

function Signup() {
    const [usuarios, setUsuarios] = useState([]);
    const { handleSubmit, register, reset } = useForm();

    function salvarUsuario(dados) {
        salvar(dados);
        reset(); // reset() -> Limpa o formulário para incluir novas informações nele 
        buscarUsuarios();
    }

    async function buscarUsuarios() {
        const usuarios = await buscar();
        setUsuarios(usuarios);
    }

    useEffect(() => {
        buscarUsuarios();
    }, []); // [] -> é obrigatório 

    // useEffect(callback, dependencias) // useEffect -> impede o usuário de buscar a função de forma desnecessária/repetir a execução da função

    return (
        <form onSubmit={handleSubmit(salvarUsuario)}>
            <h1>Cadastra-se</h1>

             <ul>
                {usuarios.map(us => <li key={us.id}>{us.nome}</li>)}
            </ul> 

            <div>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" {...register("nome")} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" {...register("email")} />
            </div>
            <div>
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" {...register("senha")} />
            </div>
            <button>Criar</button>
        </form>
    );
}

export default Signup;

// Sempre que ocorrer o erro de "ReferenceError: 'função' is not defined" é porque não ocorreu a importação da função que está sendo chamada