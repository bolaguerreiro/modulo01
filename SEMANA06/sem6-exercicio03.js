fetch("./data.json")
  .then((response) => response.json())
    const jsonContent = document.getElementById("json-content");
    jsonContent.textContent = JSON.stringify(data, null, 2);
  })
  .catch((error) => console.error("Erro ao buscar dados:", error));
