const doc = fetch("https://viacep.com.br/ws/41950350/json/");

doc
  .then((resolucao) => {
    return resolucao.json();
  })
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body.logradouro;
    console.log(body);
  });
