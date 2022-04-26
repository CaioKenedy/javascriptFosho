const promessa = new Promise(function (resolve, reject) {
  let condicao = true;
  if (condicao) {
    resolve("Estou pronto!");
  } else {
    reject("Um erro ocorreu.");
  }
});

// console.log(promessa);

const promessinha = new Promise(function (resolve) {
  resolve();
});

// console.log(promessinha);

promessa.then(function (resolucao) {
  console.log(resolucao);
});

const promise = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Caio", idade: 26 });
    }, 1000);
  } else {
    reject(Error("deu ruim"));
  }
});

const retorno = promise.then((resolucao) => {
  resolucao.profissao = "tecnico";
  return resolucao;
});
