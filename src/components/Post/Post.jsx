import Titulo from "../Titulo/Titulo";
import { useState } from "react";
import "./style.css";

function Post (props) {
    const [curtidas, setCurtidas] = useState(0);  // [estado, função modificadora do estado]
    const [descurtidas, setDescurtidas] = useState(0);
    const [carregando, setCarregando] = useState(true);

    setTimeout(() => {
        setCarregando(false);
    }, 3000);

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

    // function adicionarDescurtidas() {
    //     setDescurtidas(descurtidas+1);
    // }

    return (
        <div className="post">
            {/* <Titulo conteudo="Dolar sobe para R$ 6 após Trump ganhar as eleições" /> */}
            <Titulo>{props.titulo}</Titulo>
            <img src={props.imagem} alt="Publicação SoulCode" width={400} />
            <p>
                {props.conteudo}
            </p>
            <p>
                <small>{props.autor}</small>
            </p>
            <button onClick={adicionarCurtida}>
                Curtidas: {curtidas}
            </button>
            <button onClick={() => {
                setDescurtidas(descurtidas+1);
            }}>
                Descurtidas: {descurtidas}
            </button>
            {curtidas > 10 ? <p>Post Popular!</p> : null}
        </div>
    );
}

export default Post;