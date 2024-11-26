// Importação dos métodos do Firestore e configuração do Firebase
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";
import app from "./firebase.config";

// Inicializa o Firestore com a configuração do app Firebase
const db = getFirestore(app);

// Função para salvar um novo post
async function salvarPt(dados) {
    const post = collection(db, "post"); // Obtém a referência da coleção "post"
    await addDoc(post, dados); // Adiciona os dados à coleção
    console.log("Post criado"); // Exibe uma mensagem de sucesso
}

// Função para buscar todos os posts
async function buscarPt() {
    const post = collection(db, "post"); // Referência da coleção "post"
    const resultados = await getDocs(post); // Obtém todos os documentos da coleção
    const objetos = []; // Array para armazenar os documentos como objetos
    resultados.forEach(doc => { 
        const post = doc.data(); // Obtém os dados do documento
        post.id = doc.id; // Adiciona o ID único do documento aos dados
        objetos.push(post); // Adiciona o objeto ao array
    });
    console.log(objetos); // Exibe os posts no console
    return objetos; // Retorna o array de objetos
}

// Função para deletar um post pelo ID
async function deletarPt(id) {
    const post = collection(db, "post"); // Referência da coleção "post"
    const documento = doc(post, id); // Referência do documento pelo ID
    await deleteDoc(documento); // Deleta o documento
}

// Função para editar um post pelo ID
async function editarPt(id, dados) {
    const post = collection(db, "post"); // Referência da coleção "post"
    const documento = doc(post, id); // Referência do documento pelo ID
    await updateDoc(documento, dados); // Atualiza o documento com os novos dados
}

// Função para salvar um novo usuário
async function salvarUs(dados) {
    const usuarios = collection(db, "usuários"); // Referência da coleção "usuários"
    await addDoc(usuarios, dados); // Adiciona os dados à coleção
    console.log("Usuário criado"); // Exibe uma mensagem de sucesso
}

// Função para buscar todos os usuários
async function buscarUs() {
    const usuarios = collection(db, "usuários"); // Referência da coleção "usuários"
    const resultados = await getDocs(usuarios); // Obtém todos os documentos da coleção
    const objetos = []; // Array para armazenar os documentos como objetos
    resultados.forEach(doc => {
        const usuario = doc.data(); // Obtém os dados do documento
        usuario.id = doc.id; // Adiciona o ID único do documento aos dados
        objetos.push(usuario); // Adiciona o objeto ao array
    });
    console.log(objetos); // Exibe os usuários no console
    return objetos; // Retorna o array de objetos
}

// Função para deletar um usuário pelo ID
async function removerUs(id) {
    const usuarios = collection(db, "usuários"); // Referência da coleção "usuários"
    const documento = doc(usuarios, id); // Referência do documento pelo ID
    await deleteDoc(documento); // Deleta o documento
}

// Função para editar um usuário pelo ID
async function editarUs(id, dados) {
    const usuarios = collection(db, "usuários"); // Referência da coleção "usuários"
    const documento = doc(usuarios, id); // Referência do documento pelo ID
    await updateDoc(documento, dados); // Atualiza o documento com os novos dados
}

// Exporta todas as funções para serem utilizadas em outros arquivos
export { salvarPt, salvarUs, buscarUs, buscarPt, removerUs, deletarPt, editarPt, editarUs };

// await só funciona dentro de uma função assincrona. O await pausa a execução da função até que a promessa seja resolvida, sem bloquear o restante do programa.
// toda função assincrona retorna uma "Promise/Promessa"
