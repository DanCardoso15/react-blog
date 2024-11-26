// Importações de dependências e componentes
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";
import { useForm } from "react-hook-form";
import { buscarPt, deletarPt, salvarPt, editarPt } from "../../firebase/firestore";

// Componente principal Home
function Home() {
  // Estado para armazenar os posts
  const [post, setPost] = useState([]);
  // Hooks para manipular formulário
  const { handleSubmit, register, reset } = useForm();

  // Função para salvar um novo post
  function salvarPost(dados) {
    salvarPt(dados); // Salva os dados no Firestore
    reset(); // Reseta os campos do formulário
    buscarPost(); // Atualiza a lista de posts
  }

  // Função para buscar todos os posts
  async function buscarPost() {
    const post = await buscarPt(); // Busca os posts no Firestore
    setPost(post); // Atualiza o estado com os posts
  }

  // Função para deletar um post pelo ID
  async function deletarPost(id) {
    await deletarPt(id); // Deleta o post no Firestore
    buscarPost(); // Atualiza a lista de posts
  }

  // Função para editar um post pelo ID
  async function editarPost(id) {
    const titulo = window.prompt("Digite o novo título:"); // Solicita o novo título ao usuário
    if (titulo) {
      const dados = { titulo }; // Cria o objeto com o novo título
      await editarPt(id, dados); // Atualiza o Firestore
      buscarPost(); // Atualiza a lista de posts
    }
    const post = window.prompt("Digite o novo conteúdo:"); // Solicita o novo conteúdo ao usuário
    if (post) {
      const dados = { post }; // Cria o objeto com o novo conteúdo
      await editarPt(id, dados); // Atualiza o Firestore
      buscarPost(); // Atualiza a lista de posts
    }
  }

  // Hook useEffect para buscar posts ao carregar o componente
  useEffect(() => {
    buscarPost(); // Carrega os posts inicialmente
  }, []);

  // Renderização do componente
  return (
    <form onSubmit={handleSubmit(salvarPost)}>
      <h1>Criar Post</h1>

      {/* Lista os posts existentes */}
      {post.map((pt) => (
        <div key={pt.id}>
          <h2>{pt.titulo}</h2>
          <p>{pt.post}</p>
          <button type="button" onClick={() => editarPost(pt.id)}>
            Editar
          </button>
          <button type="button" onClick={() => deletarPost(pt.id)}>
            Deletar
          </button>
        </div>
      ))}

      {/* Formulário para criar um novo post */}
      <div>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" id="titulo" {...register("titulo")} />
      </div>
      <div>
        <label htmlFor="post">Post</label>
        <input type="text" id="post" {...register("post")} />
      </div>
      <button>Criar</button>
    </form>
  );
}

// const post1 = {
//     titulo: "Soulcode ganha importante prêmio após capacitar milhares de alunos",
//     autor: "Danilo Cardoso",
//     conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
//     imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhdh657rvC_CFOOAEefBq3H5h_4CvHR7OXw&s",
//   };

//   const post2 = {
//     titulo: "Título Post 2",
//     autor: "Grabriel Braga",
//     conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
//     imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAO3UTZKb24tsTSkhjfpwmrVJFIGQbuA5uLg&s",
//   };

//   const post3 = {
//     titulo: "Título Post 3",
//     autor: "Marcos Paulo",
//     conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
//     imagem: "https://images.unsplash.com/photo-1433477155337-9aea4e790195?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
//   };

//   const post4 = {
//     titulo: "Título Post 4",
//     autor: "Miguel Onaga",
//     conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
//     imagem: "https://ehgomes.com.br/wp-content/uploads/2023/08/Vectorizer.AI-A-Ferramenta-que-Transforma-Imagens-em-Vetores.webp",
//   };

//   const post5 = {
//     titulo: "Título Post 5",
//     autor: "Lana Marks",
//     conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
//     imagem: "https://www.mercadoeeventos.com.br/wp-content/uploads/2022/10/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020.png",
//   };

//   const posts = [
//     post1,
//     post2,
//     post3,
//     post4,
//     post5,
//   ];

// function Home() {
//     return (
//         <div>
//             <Header />
//             <h1>Home</h1>
//             {/*<Post {...post1}/>  titulo={post1.titulo} autor={post1.autor} conteudo={post1.conteudo} imagem={post1.imagem}*/}
//             {posts.map(post => {
//                 return <Post key={post.titulo} {...post} />
//             })}
//             <Footer /> 
//         </div>
//     )
// }

// Exporta o componente Home
export default Home;