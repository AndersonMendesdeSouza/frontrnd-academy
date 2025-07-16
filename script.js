// BUSCA DE ALUNOS
 
 const botaoLogin = document.getElementById("form-login")
 botaoLogin.addEventListener("submit", (click)=>{
  click.preventDefault();

 })
const buscaButton = document.getElementById("busca-submit");
buscaButton.addEventListener("click", (event) => {
  event.preventDefault();

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
});


// CADASTRO DE ALUNOS
const formCadastro = document.getElementById("formCadastro");
formCadastro.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const sexo = document.getElementById("sexoo").value;
  const dataNascimento = document.getElementById("dataNascimento").value;

  const aluno = {
    nome,
    cpf,
    email,
    telefone,
    sexo,
    datanascimento: dataNascimento // cuidado com o nome que o backend espera
  };

  const urlPost = "https://fitacademy-production.up.railway.app/academia";

  fetch(urlPost, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(aluno)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao enviar os dados do aluno!");
      }
      return response.json(); // corrigido: .json() minúsculo
    })
    .then(valor => {
      alert("Aluno cadastrado com sucesso! ID: " + valor.id);
      formCadastro.reset();
    })
    .catch(erro => {
      console.error("Erro no cadastro:", erro);
      alert("Erro no cadastro: " + erro.message);
    });
});

// ATUALIZAR ALUNOS
 const formAtualizar = document.getElementById("formAtualizar");

formAtualizar.addEventListener("submit", (click) => {
  click.preventDefault();

  let id = document.getElementById("idAtualizar").value;
  let nome = document.getElementById("nomeAtualizar").value;
  let cpf = document.getElementById("cpfAtualizar").value;
  let email = document.getElementById("emailAtualizar").value;
  let telefone = document.getElementById("telefoneAtualizar").value;
  let sexo = document.getElementById("sexo").value;
  let dataNascimento = document.getElementById("dataAtualizar").value;

if(id === ""){
  id =null;
}

if(nome === ""){
  nome =null;
}

if(cpf === ""){
  cpf =null;
}
if(email === ""){
  email =null;
}
if(telefone === ""){
  telefone =null;
}
if(sexo === ""){
  sexo =null;
}
if(dataNascimento === ""){
  dataNascimento =null;
}



  const alunoPut = {
    id,
    nome,
    cpf,
    email,
    telefone,
    sexo,
    datanascimento: dataNascimento,
  };

 fetch('https://fitacademy-production.up.railway.app/academia', {
  method: "PUT",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(alunoPut)
})
  .then(async response => {
    if (!response.ok) {
      const errorText = await response.text(); // Pega o erro real do backend
      throw new Error("Erro ao atualizar os dados do aluno!\n\n" + errorText);
    }
    return response.json();
  })
  .then(valor => {
    alert("Aluno atualizado com sucesso! ID: " + valor.id);
    formAtualizar.reset();
  })
  .catch(erro => {
    console.error("Erro na atualização:", erro);
    alert("Erro na atualização: " + erro.message);
  });

});

 const formDeletar = document.getElementById("formDeletar");
 formDeletar.addEventListener("submit", (click)=>{
click.preventDefault();
const idDelet = document.getElementById("idDeletar").value

const URLdelet = "https://fitacademy-production.up.railway.app/academia/" + idDelet;

 fetch(URLdelet, {
  method: "DELETE"
})
  .then(async response => {
    if (!response.ok) {
      const errorText = await response.text(); // Pega o erro real do backend
      throw new Error("Erro ao atualizar os dados do aluno!\n\n" + errorText);
    
    }
  })
  .then(() => {
    alert("Aluno Deletado com sucesso! ID: " + idDelet);
    formDeletar.reset();
  })
  .catch(erro => {
    console.error("Erro ao Excluir aluno:", erro);
    alert("Erro ao excluir: " + erro.message);
  });
 })



