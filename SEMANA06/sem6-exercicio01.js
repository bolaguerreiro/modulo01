function verificarPar(numero) {
    return new Promise((resolve, reject) => {
      if (typeof numero !== 'number') {
        reject(new Error('Erro: o valor informado não é um número.'));
      } else if (numero % 2 === 0) {
        resolve('Número validado é par.');
      } else {
        reject(new Error('Erro: número informado é ímpar.'));
      }
    });
  }
  
  // Exemplo de uso:
  const meuNumero = 42; // Substitua pelo número que deseja verificar
  verificarPar(meuNumero)
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((erro) => {
      console.error(erro.message);
    });