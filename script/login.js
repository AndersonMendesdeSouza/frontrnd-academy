 const token = localStorage.getItem('token');

if (!token) {
  window.location.href = '/index.html'; // volta pro login se não tiver token
}
 

function logando(){  const loading = document.createElement("div")
loading.innerHTML = "<label>Carregando...</label>"
loading.classList.add("container-load")
 

 const projeto = document.querySelector(".projeto-login")
projeto.appendChild(loading)
 }

 const form = document.getElementById("form-login")
 const link = document.getElementById("link")
 form.addEventListener("submit", (click)=>{
  click.preventDefault();
  logando();
const nome = document.getElementById("nomeLogin").value
const senha = document.getElementById("senhaLogin").value



const usuario = {
  nome,
  senha
}

const URL = "https://fitacademy-production.up.railway.app/academia/postAcessar"

fetch(URL, {
  method: "POST",
  headers:{ "Content-Type":"application/json"},

body: JSON.stringify(usuario)})

.then(resposta=>{
if(!resposta.ok){
  alert("Nome de usuario ou senha inválidos")
} else{
link.click();
}
})
.catch(erro=>{
  console.error("Erro ao comunicar com o servidor", erro)
alert("Erro ao fazer login")
})

form.reset();
 })