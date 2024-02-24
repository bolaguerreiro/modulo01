const numeros = [25, 30, 56, 2, 7]
const numerosOrdenados = numeros.slice()
numerosOrdenados.sort((a,b) => (a-b) )

// console.log(numerosOrdenados)
// EXERCICIO 06
const pares = numeros.filter(numeros => {
    if (numeros % 2 == 0) {
        return true
    }})
console.log ("O novo array com numeros pares é ", pares)
// FIM EXERCICIO 06
//EXERCICIO 07
const quadrado = numeros.map(numeros => numeros ** 2)
console.log ("numeros ao quadrado ", quadrado)
//FIM EXERCICIO 07
