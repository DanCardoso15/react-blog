import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Sac from "./pages/Sac/Sac";
import Sobre from "./pages/Sobre/Sobre";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function Hello() {
  return <h2>Olá meu amigo. Como vai?</h2> // Se a função retorna um HTML, então ele é um componente
      // <h1>Hello World!</h1>
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Sac" element={<Sac />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Transpiler (Transpilador) -> Babel
// Para abrir o projeto no navegador é necessário abrir o terminal e usar o comando "npm run dev". Para fechar o comando é "Ctrl + c"
// Não é um HTML, mas é muito semelhante
// Não é possível usar dois ou mais elementos, ao menos que eles estejam dentro de outra tag
// Todo atributo que tem traço no HTML, no JSX não tem. A forma de usar esse atributo é com camelCase. Ex: aria-label -> ariaLabel
// O "for" no react deve ser representado como "htmlFor" -> "class" também deve ser representado como "className"
//<Header /> "Ctrl + espaço" -> comando para importar o componente, mas só funciona se o arquivo do componente estiver aberto 
