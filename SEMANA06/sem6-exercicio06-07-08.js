let cep = prompt("Digite seu cep: ")

fetch(`https://viacep.com.br/ws/${cep}/json/`, { method: "GET" })
  .then((retornoFetch) => {
    return retornoFetch.json();
  })
  .then((retornoApi) => {
    alert(
      `${retornoApi.logradouro}, ${retornoApi.complemento} - ${retornoApi.bairro}/${retornoApi.uf}`
    );
    let resposta = prompt("Os dados estão corretos?");
    if (resposta.toLowerCase() =="sim"){
        localStorage.setItem("endereco", JSON.stringify(retornoApi));
    }
  });
