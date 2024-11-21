import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

const post1 = {
    titulo: "Soulcode ganha importante prêmio após capacitar milhares de alunos",
    autor: "Danilo Cardoso",
    conteudo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEhdh657rvC_CFOOAEefBq3H5h_4CvHR7OXw&s",
  };

function Home() {
    return (
        <div>
            <Header />
            <h1>Home</h1>
            <Post {...post1}/> {/* titulo={post1.titulo} autor={post1.autor} conteudo={post1.conteudo} imagem={post1.imagem}*/}
            <Footer /> 
        </div>
    )
}

export default Home;