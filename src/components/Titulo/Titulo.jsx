function Titulo(props) {
    return (
        <h2 style={{backgroundColor: "black", color: "yellow", textAlign: "center"}}>
            {props.children}
        </h2>
    );
}

export default Titulo;

// "props.children" -> Tudo que estiver dentro da Tag componente é mostrado no navegador