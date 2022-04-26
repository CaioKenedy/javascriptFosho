// const doc = fetch("https://viacep.com.br/ws/41950350/json/");

// doc
//   .then((resolucao) => {
//     return resolucao.json();
//   })
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body.logradouro;
//     console.log(body);
//   });

const sobre = fetch("./sobre.html");

const div = document.createElement("div");

sobre
  .then((resolucao) => {
    return resolucao.text();
  })
  .then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;

    console.log(titulo);
  });
