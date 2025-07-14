 

const buscaButon = document.getElementById("busca-submit")
buscaButon.addEventListener("click",(click)=>{
click.preventDefault();

 const ol = document.getElementById("listaResultados");
 const busca = document.getElementById("idBusca");

const url = "http://localhost:8080/academia"+ busca.value;

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao buscar os dados da API');
        }
        return response.json();
    })
    .then(dados => {
        ol.innerHTML = ""; // limpa a lista antes
        dados.forEach(aluno => {
            const li = document.createElement("li");
            li.textContent = `ID: ${aluno.id}, Nome: ${aluno.nome}, Idade: ${aluno.datanascimento} `;
            ol.appendChild(li);
        });
    })
    .catch(erro => {
        console.error("Erro na requisição:", erro);
        alert("Erro na requisição: " + erro.message);
    });

});