
// BUSCA DE ALUNOS
const buscaButton = document.getElementById("busca-submit");
buscaButton.addEventListener("click", (event) => {
  event.preventDefault();
 
buscaButton.innerText = "Carregando...";

 

  const ol = document.getElementById("listaResultados");
  const busca = document.getElementById("idBusca");
  let url;

  if (busca.value === null || busca.value.trim() === "") {
    url = "https://fitacademy-production.up.railway.app/academia"; // busca todos
  } else {
    url = "https://fitacademy-production.up.railway.app/academia/" + busca.value; // busca por ID
  }

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao buscar os dados da API");
      }
      return response.json();
    })
    .then(dados => {
      ol.innerHTML = "";

      // Se for um único aluno (objeto), transforma em array
      if (!Array.isArray(dados)) {
        dados = [dados];
      }

      if (dados.length === 0) {
        const li = document.createElement("li");
        li.textContent = "Aluno não encontrado";
        ol.appendChild(li);
        return;
      }

      dados.forEach(aluno => {
        const li = document.createElement("li");
        li.textContent = `ID: ${aluno.id}, Nome: ${aluno.nome}, Nascimento: ${aluno.datanascimento}`;
        ol.appendChild(li);
      });
    })
    .catch(erro => {
      console.error("Erro na requisição:", erro);
      alert("Erro na requisição: " + erro.message);
    });
    buscaButton.innerText = "Buscar";
});






 
