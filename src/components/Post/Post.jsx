import Titulo from "../Titulo/Titulo";
import { useState } from "react";
import "./style.css";

function Post () {
    const [curtidas, setCurtidas] = useState(0);  // [estado, função modificadora do estado]
    const [carregando, setCarregando] = useState(true);

    setTimeout(() => {
        setCarregando(false);
    }, 5000);

    if (carregando) {
        return (
            <div className="post">
                <p>Carregando...</p>
            </div>
        );
    }


    function adicionarCurtida() {
        setCurtidas(curtidas+1);
    }

    return (
        <div className="post">
            {/* <Titulo conteudo="Dolar sobe para R$ 6 após Trump ganhar as eleições" /> */}
            <Titulo>Soulcode ganha importante prêmio após capacitar milhares de alunos</Titulo>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore beatae maxime totam dolore soluta dicta, excepturi, nam minus earum delectus iste deserunt, fugit possimus corporis facilis pariatur explicabo voluptatum sunt?
            </p>
            <button onClick={adicionarCurtida}>
                Curtidas: {curtidas}
            </button>
        </div>
    );
}

export default Post;