// Inicializamos as contagens para cada tipo de avaliação
let avaliacaoRuim = 0;

// Número total de entrevistados
const totalEntrevistados = 4;

// Variável para controlar o loop
let contador = 1;

// Enquanto ainda não entrevistamos todos os usuários
while (contador <= totalEntrevistados) {
  // Simulamos a entrevista com o usuário (pode ser substituído por input real)
  avaliacao = prompt(`Usuário ${contador}, qual a sua avaliação para a série "Stranger Things"? (ruim, bom ou excelente)`);

  // Verificamos o tipo de avaliação e atualizamos as contagens
  if(avaliacao=="ruim"){
    avaliacaoRuim++;
  }
  // Incrementamos o contador para passar para o próximo usuário
  contador++;
}

// Exibimos os resultados
console.log(`Total de avaliações ruins: ${avaliacaoRuim}`);
