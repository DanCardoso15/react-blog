import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

const post1 = {
    titulo: "Soulcode ganha importante prêmio após capacitar milhares de alunos",
    autor: "Danilo Cardoso",
    conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhdh657rvC_CFOOAEefBq3H5h_4CvHR7OXw&s",
  };

  const post2 = {
    titulo: "Título Post 2",
    autor: "Grabriel Braga",
    conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAO3UTZKb24tsTSkhjfpwmrVJFIGQbuA5uLg&s",
  };

  const post3 = {
    titulo: "Título Post 3",
    autor: "Marcos Paulo",
    conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
    imagem: "https://images.unsplash.com/photo-1433477155337-9aea4e790195?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3",
  };

  const post4 = {
    titulo: "Título Post 4",
    autor: "Miguel Onaga",
    conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
    imagem: "https://ehgomes.com.br/wp-content/uploads/2023/08/Vectorizer.AI-A-Ferramenta-que-Transforma-Imagens-em-Vetores.webp",
  };

  const post5 = {
    titulo: "Título Post 5",
    autor: "Lana Marks",
    conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
    imagem: "https://www.mercadoeeventos.com.br/wp-content/uploads/2022/10/Embratur-Brasil-ultrapassa-marca-de-1-milhao-de-turistas-estrangeiros-recebidos-pela-primeira-vez-desde-2020.png",
  };

  const posts = [
    post1,
    post2,
    post3,
    post4,
    post5,
  ];

function Home() {
    return (
        <div>
            <Header />
            <h1>Home</h1>
            {/*<Post {...post1}/>  titulo={post1.titulo} autor={post1.autor} conteudo={post1.conteudo} imagem={post1.imagem}*/}
            {posts.map(post => {
                return <Post key={post.titulo} {...post} />
            })}
            <Footer /> 
        </div>
    )
}

export default Home;