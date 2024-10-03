document.getElementById('numberForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário para validação antes do JavaScript
  
    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);
    const messageElement = document.getElementById('message');
  
    if (campoB > campoA) {
      messageElement.textContent = 'Parabéns! Formulário válido: B é maior que A!';
      messageElement.className = 'success';
    } else {
      messageElement.textContent = 'Tente novamente! Formulário inválido: B deve ser maior que A.';
      messageElement.className = 'error';
    }
  });
  