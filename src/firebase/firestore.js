import { addDoc, collection, getDocs, getFirestore }  from "firebase/firestore";
import app from "./firebase.config";

const db = getFirestore(app);

async function salvar(dados) {
    const usuarios = collection(db, "usuários");
    await addDoc(usuarios, dados);
    console.log("Usuário criado.");
}

async function buscar() {
    const usuarios = collection(db, "usuários");
    const resultados = await getDocs(usuarios);
    const objetos = [];
    resultados.forEach(doc => {
        const usuario = doc.data();
        usuario.id = doc.id;
        objetos.push(usuario);
    }); // .data() -> retorna as informações do documento
    console.log(objetos);
    return objetos;
}

export { salvar, buscar };

// await só funciona dentro de uma função assincrona
// toda função assincrona retorna uma "Promise/Promessa"
