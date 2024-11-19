import Header from "./components/Header/Header";
import UserCard from "./components/UserCard/UserCard";
import Footer from "./components/Footer/Footer";
import imgJoao from "./assets/Joao.png";
import imgMaria from "./assets/Maria.png";
import Post from "./components/Post/Post";

function Hello() {
  return <h2>Olá meu amigo. Como vai?</h2> // Se a função retorna um HTML, então ele é um componente
}

function App() {
  return (
    <>
      {/* <h1>Hello World!</h1> */}
      <Header />
      <Post />
      <UserCard avatar={imgMaria} nome="Maria de Souza" idade={30} />
      <UserCard avatar={imgJoao} nome="João Guimarães" idade={45} ocupacao="Engenheiro Civil" /> {/* Quando não queremos passar uma propriedade que não é String/texto, usamos {chaves} entre o valor */}
      <Footer />
    </>
  )
}

export default App;

// Transpiler (Transpilador) -> Babel
// Para abrir o projeto no navegador é necessário abrir o terminal e usar o comando "npm run dev". Para fechar o comando é "Ctrl + c"
// Não é um HTML, mas é muito semelhante
// Não é possível usar dois ou mais elementos, ao menos que eles estejam dentro de outra tag
// Todo atributo que tem traço no HTML, no JSX não tem. A forma de usar esse atributo é com camelCase. Ex: aria-label -> ariaLabel
// O "for" no react deve ser representado como "htmlFor" -> "class" também deve ser representado como "className"
//<Header /> "Ctrl + espaço" -> comando para importar o componente, mas só funciona se o arquivo do componente estiver aberto 
