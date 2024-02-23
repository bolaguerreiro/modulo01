const calcularMediaArray = (numeros) => {
    if (numeros.length === 0) {
        return "O array está vazio. Não é possível calcular a média.";
    }
    let soma = 0;
    for (let i=0; i< numeros.length; i++) {
        soma += numeros[i];
    }
    const media = soma / numeros.length;
    return `A média dos número é: ${media}'`;
};
const meuArray = [7, 21, 5, 4, 8, 6, 9];
console.log(calcularMediaArray(meuArray));
