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
