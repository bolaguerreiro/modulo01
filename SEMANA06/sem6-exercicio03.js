fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    // Exibe o conteúdo JSON formatado
    document.getElementById('json-conteudo').textContent = JSON.stringify(data, null, 2);
})
