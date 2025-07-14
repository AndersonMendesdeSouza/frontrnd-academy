 

const buscaButon = document.getElementById("busca-submit")
buscaButon.addEventListener("click",(click)=>{
click.preventDefault();



fetch('http://localhots:8080/academia')
.then(response=>{
    if(!response.ok){
        throw new Error('erro ao buscar os dados da API')
    }
    return response.json();
})
.then(dados =>{
    alert("Alunos: ", dados)
}).catch(erro =>{
    alert("erro na requisição")
})
})
