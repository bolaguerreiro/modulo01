function pegarInformacoes() {
  nome = prompt("Qual o seu nome? ");
  idade = prompt("Qual o sua idade? ");
  email = prompt("Qual o seu email? ");
  
  const dados = {
    name: nome,
    age: idade,
    email: email,
  };
  localStorage.setItem("user", JSON.stringify(dados));
}
pegarInformacoes();
