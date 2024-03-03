function verificarPar(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve("Número validado é par.");
    } else {
      reject(new Error("Erro: número informado é ímpar."));
    }
  });
}

const meuNumero = 42;
verificarPar(meuNumero)
  .then((mensagem) => {
    console.log(mensagem);
  })
  .catch((erro) => {
    console.error(erro.message);
  });
