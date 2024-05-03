// Função para analisar a QueryString e retornar um objeto com os parâmetros
function parseQueryString() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  let result = {};

  for (const [key, value] of params.entries()) {
      result[key] = value;
  }

  return result;
}

// Função para exibir os parâmetros da QueryString
function displayQueryString() {
  const queryParams = parseQueryString();
  console.log("Parâmetros da QueryString:");
  if (Object.keys(queryParams).length === 0) {
      console.log("Não há parâmetros na QueryString.");
  } else {
      for (const [key, value] of Object.entries(queryParams)) {
          console.log(`${key}: ${value}`);
      }
  }
}

// Chamada da função para exibir os parâmetros
displayQueryString();
