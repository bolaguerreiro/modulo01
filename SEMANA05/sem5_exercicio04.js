const numeros = [15, 6, 5, 8, 9]
const resultado = numeros.reduce((soma,numeroAtual)=> {
    return soma + numeroAtual
}, 0)
console.log  ("A soma dos numeros é: ",resultado)