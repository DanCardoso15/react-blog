import HeaderA from "./Atividade/components/Header/HeaderA";
import UserCard from "./Atividade/components/UserCard/UserCard";
import Footer from "./Atividade/components/Footer/Footer";
import Header from "./components/Header/Header";

function Hello() {
  return <h2>Olá meu amigo. Como vai?</h2> // Se a função retorna um HTML, então ele é um componente
}

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <HeaderA />
      <UserCard />
      <UserCard />
      <Footer />
    </>
  )
}

export default App;

// Transpiler (Transpilador) -> Babel
// Não é um HTML, mas é muito semelhante
// Não é possível usar dois ou mais elementos, ao menos que eles estejam dentro de outra tag
// Todo atributo que tem traço no HTML, no JSX não tem. A forma de usar esse atributo é com camelCase. Ex: aria-label -> ariaLabel
// O "for" no react deve ser representado como "htmlFor" -> "class" também deve ser representado como "className"
//<Header /> "Ctrl + espaço" -> comando para importar o componente, mas só funciona se o arquivo do componente estiver aberto 
