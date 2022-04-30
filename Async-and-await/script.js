async function puxarDados() {
  const dadosResponse = await fetch("./dados.json");
  const dadosJson = await dadosResponse.json();

  document.body.innerText = dadosJson.aula;
}

puxarDados();

function pegarDados() {
  const dados = fetch("./clientes.json");
  dados
    .then((response) => {
      return response.json();
    })
    .then((arquivos) => {
      document.body.innerText = arquivos.nome;
    });
}

pegarDados();

async function multiplosFetch() {
  const dadosResponse = await fetch("./dados.json");
  const clientesResponse = await fetch("./clientes.json");

  const jsonDados = await (await dadosResponse).json();
  const jsonClientes = await (await clientesResponse).json();
}
