 

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gerenciamento de Alunos</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <link rel="stylesheet" href="../style.css">
</head>

<body>
  <div class="container-projeto">
 <header class="hed">
      <nav>
<div class="logo">
  <h1>FIT</h1>
  <h3>Academy</h3>
</div>
<div class="search-box">
  <input type="text" placeholder="Buscar aluno..." />
  <i class="fas fa-search"></i>
</div>
     <div>
        <ul>
          <li><a href="buscaraluno.html">Buscar</a></li>
          <li><a href="atualizaraluno.html">Atualizar</a></li>
          <li><a href="deletaraluno.html">Deletar</a></li>
        </ul>
        </div>
      </nav>
    </header >
 
    <div class="text-cadastro">
      <h2>FAÇA O CADASTRO DOS SEUS ALUNOS.</h2>
    </div>


    <div class="container" id="cadastrados">

      <!-- Cadastro -->
      <div class="form-section">
        <h2>Cadastro</h2>
        <form id="formCadastro">
          <label for="nome">Nome:</label>
          <input type="text" id="nome" required>

          <label for="email">E-mail:</label>
          <input type="email" id="email" required>

          <label for="cpf">CPF:</label>
          <span id="erroCPF" style="color: red; font-size: 14px;"></span>
          <input type="text" id="cpf" placeholder="000.000.000-00" required>

          <label for="telefone">Telefone:</label>
          <span id="erroTelefone" style="color: red; font-size: 14px;"></span>
          <input type="tel" id="telefone"  placeholder="99 99999-9999">

          <label for="sexo">Sexo:</label>

          <select name="seco" id="sexoo" class="select" required>
            <option value="" selected>Selecione</option>
            <option value="MASCULINO">Masculino</option>
            <option value="FEMININO">Feminino</option>
            <option value="PREFIRONAODIZAR">Prefiro não Dizer</option>

          </select>

          <label for="dataNascimento">Data de Nascimento:</label>
          <input type="date" id="dataNascimento" required>

          <button type="submit" id="botao-cadastro">Cadastrar</button>
        </form>
      </div>

      <!-- Buscar -->
      <div class="form-section">
        <h2>Buscar</h2>
        <form id="formBuscar">
          <label for="idBusca">ID (opcional):</label>
          <input type="number" id="idBusca">

          <button type="submit" id="busca-submit">Buscar</button>

          <div id="resultadoBusca">
             <h3 id="result">RESULTADOS</h3>
            <ul id="listaResultados"> </ul>
          </div>
        </form>
      </div>

      <!-- Atualizar -->
      <div class="form-section">
        <h2>Atualizar</h2>
        <form id="formAtualizar">
          <label for="idAtualizar">ID do Aluno:</label>
          <input type="number" id="idAtualizar" required>

          <label for="nomeAtualizar">Nome:</label>
          <input type="text" id="nomeAtualizar">

          <label for="emailAtualizar">E-mail:</label>
          <input type="email" id="emailAtualizar">

          <label for="cpfAtualizar">CPF:</label>
          <input type="text" id="cpfAtualizar" placeholder="000.000.000-00">
          <span id="erroCPFAT" style="color: red; font-size: 14px;"></span>

          <label for="telefoneAtualizar">Telefone:</label>
          <input type="tel" id="telefoneAtualizar" placeholder="99 99999-9999">
<span id="erroTelefoneAT" style="color: red; font-size: 14px;"></span>
          <label for="sexoAtualizar">Sexo:</label>
          <select name="sexo" id="sexo" class="select">
          
            <option value="MASCULINO">Masculino</option>
            <option value="FEMININO">Feminino</option>
            <option value="PREFIRONAODIZER" selected>Prefiro não Dizer</option>
          </select>



          <label for="dataAtualizar">Data de Nascimento:</label>
          <input type="date" id="dataAtualizar">

          <button type="submit">Atualizar</button>
        </form>
      </div>

      <!-- Deletar -->
      <div class="form-section">
        <h2>Deletar</h2>
        <form id="formDeletar">
          <label for="idDeletar">ID do Aluno:</label>
          <input type="number" id="idDeletar" required>

          <button type="submit">Deletar</button>
        </form>
      </div>

    </div>
    </main>
  </div>

  <script src="../script.js"></script>
</body>

 
