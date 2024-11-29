import { useForm } from "react-hook-form";
import { salvarUs } from "../../firebase/firestore";
import { cadastrar } from "../../firebase/authentication";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { Button, Container } from "react-bootstrap";

function Signup() {
  const { handleSubmit, register, reset } = useForm();
  const navigate = useNavigate();

  async function salvarUsuario({ email, senha, nome }) {
    try {
      const usuario = await cadastrar(email, senha);
      await salvarUs({ email, senha, nome, authId: usuario.uid });
      reset(); // reset() -> Limpa o formulário para incluir novas informações nele
      navigate("/login");
    } catch (erro) {
      window.alert("Algo deu errado.");
      console.error(erro);
    }
  }

  return (
    <div>
      <Header />
      <Container>
        <h1>Cadastra-se</h1>

        <form onSubmit={handleSubmit(salvarUsuario)}>
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
          <Button type="submit">Criar</Button>
        </form>
      </Container>
    </div>
  );
}

export default Signup;

// Sempre que ocorrer o erro de "ReferenceError: 'função' is not defined" é porque não ocorreu a importação da função que está sendo chamada

// useEffect(callback, dependencias) // useEffect -> impede o usuário de buscar a função de forma desnecessária/repetir a execução da função  
// [] -> é obrigatório 