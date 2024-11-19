import "./style.css";

export default ({avatar, nome, idade, ocupacao}) => { // (props)

    const carregando = false;

    if (carregando) {
        return (
            <article className="user-card">
                <p>Carregando...</p>
            </article>
        );
    }



    // let nome = props.nome;
    // let idade = props.idade;
    // let ocupacao = props.ocupacao;
    // const {nome, idade, ocupacao} = props; // desestruturação -> destruct
    return (
        <article className="user-card">
            <img src={avatar} alt="Foto de Perfil"  width={300} /> {/*{props.avatar}*/}
            <p>Nome: {nome}</p> {/*{props.nome}*/}
            <p>Idade: {idade} anos</p> {/*{props.idade}*/}
            <p>Ocupação: {ocupacao == undefined ? "Não definido" : ocupacao}</p> {/*{props.ocupacao}*/}
            {/* <p>Ocupação: {ocupacao ? ocupacao : "Não definido"} */}
            </article>
    );
}

// props -> propriedades
// operação ternária -> se isso ? estão true : ou false