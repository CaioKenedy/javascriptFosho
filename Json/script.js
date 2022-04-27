fetch("./dados.json")
  .then((response) => {
    return response.json();
  })
  .then((arquivoJson) => {
    console.log(arquivoJson[0].aula);
    arquivoJson.forEach((coisasDentro) => {
      console.log(coisasDentro.aula);
    });
  });

//.json faz a mesma coisa que parse faz.... JSON.parse(stringaqui)

//mandar arquivo para JSON

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2.1 Javascript",
};

const stringConfig = JSON.stringify(configuracoes);

console.log(stringConfig);

// exemplo real

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));
