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

const retorno = promise
  .then((resolucao) => {
    resolucao.profissao = "tecnico";
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitada) => {
    console.log(rejeitada);
  })
  .finally(() => {
    console.log("acabou");
  });

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login Efetuado");
  }, 1000);
});

const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados");
  }, 1500);
});

const tudoCarregado = Promise.all([login, dados]);

tudoCarregado.then((respostas) => {
  console.log(respostas);
});
