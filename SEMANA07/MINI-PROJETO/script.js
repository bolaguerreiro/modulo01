class Produto {
  constructor(nomeProduto, precoProduto, quantidadeProduto) {
    this.nome = nomeProduto;
    this.preco = precoProduto;
    this.quantidade = quantidadeProduto;
  }
  Vender(quantidadeVendida) {
    if (quantidadeVendida <= this.quantidade) {
      this.quantidade -= quantidadeVendida;
      console.log("Venda realizada com sucesso");
    } else {
      console.log("Estoque insuficiente");
    }
  }
  Repor(quantidadeReposta) {
    this.quantidade += quantidadeReposta;
  }
  MostraEstoque() {
    console.log(
      `O produto ${this.nome} possui ${this.quantidade} unidades disponíveis`
    );
  }
  AtualizaPreco(novoValor) {
    this.preco = novoValor;
  }
}
// Classe Pessoa
class Pessoa {
    nome;
    idade;
    profissao;
    constructor(nomePessoa, idadePessoa, profissaoPessoa) {
      this.nome = nomePessoa;
      this.idade = idadePessoa;
      this.profissao = profissaoPessoa;
    }
}
// Classe Cliente herda Pessoa
class Cliente extends Pessoa {
    telefone;
    email;
    clienteDesde;
    constructor (nomePessoa, idadePessoa, profissaoPessoa, numeroTelefone, email, clienteDesde) {
        super (nomePessoa, idadePessoa,profissaoPessoa);
        this.telefone = numeroTelefone;
        this.email = email;
        this.clienteDesde = clienteDesde;
    }
}


