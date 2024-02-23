prompt = require ("prompt-sync")();
let arrayNumeros = [];
for (let i=0; i<5;i++){
    let numero = prompt ('Qual o número desejado: ');
    arrayNumeros.push(numero);
    console.log ("O número é:", arrayNumeros[i]);
}