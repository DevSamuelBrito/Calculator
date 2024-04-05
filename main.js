const result = document.getElementById("result");

function appendToResult(input) {
  result.value += input;
}

function clearResult() {
  result.value = ``;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}

function deleteResult() {
  let valorInput = result.value;

  // Verificar se há caracteres para apagar
  if (valorInput.length > 0) {
    // Apagar o último caractere
    valorInput = valorInput.slice(0, -1);
    // Atualizar o valor do input
    result.value = valorInput;
  }
}
