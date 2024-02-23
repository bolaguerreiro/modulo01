// Inicializa um objeto para armazenar as quantidades de cada produto
const produtos = {
    Hortifruti: 0,
    Laticínios: 0,
    Carnes: 0,
    Peixes: 0,
    Aves: 0,
  };
  
  // Função para perguntar ao cliente qual produto deseja comprar
  function perguntarProduto() {
    const resposta = prompt(
      "Qual produto você deseja comprar?\n" +
        "(1) Hortifruti\n" +
        "(2) Laticínios\n" +
        "(3) Carnes\n" +
        "(4) Peixes\n" +
        "(5) Aves\n" +
        "(6) Fechar pedido"
    );
  
    switch (resposta) {
      case "1":
        perguntarQuantidade("Hortifruti");
        break;
      case "2":
        perguntarQuantidade("Laticínios");
        break;
      case "3":
        perguntarQuantidade("Carnes");
        break;
      case "4":
        perguntarQuantidade("Peixes");
        break;
      case "5":
        perguntarQuantidade("Aves");
        break;
      case "6":
        finalizarPedido();
        break;
      default:
        alert("Opção inválida. Por favor, escolha uma das opções numeradas.");
        perguntarProduto();
    }
  }
  
  // Função para perguntar a quantidade de itens do produto selecionado
  function perguntarQuantidade(produto) {
    const quantidade = parseInt(prompt(`Quantos ${produto} você deseja comprar?`));
    if (!isNaN(quantidade)) {
      produtos[produto] += quantidade;
      perguntarProduto();
    } else {
      alert("Por favor, insira um número válido.");
      perguntarQuantidade(produto);
    }
  }
  
  // Função para finalizar o pedido e imprimir o produto com maior quantidade
  function finalizarPedido() {
    let maiorQuantidade = 0;
    let produtoMaisComprado = "";
  
    for (const produto in produtos) {
      if (produtos[produto] > maiorQuantidade) {
        maiorQuantidade = produtos[produto];
        produtoMaisComprado = produto;
      }
    }
  
    alert(`Pedido finalizado! O produto mais comprado foi: ${produtoMaisComprado}`);
  }
  
  // Inicia o processo de perguntas
  perguntarProduto();