document.getElementById('CONTATO666').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  fetch('URL_DO_SEU_SCRIPT', {
    method: 'POST',
    body: new FormData(this)
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === 'success') {
      window.location.href = "pagina_inicial.html"; // Redireciona para a página inicial em caso de sucesso
    } else {
      // Se houver um erro no envio do formulário, você pode tratar aqui
      console.error('Erro no envio do formulário:', data.error);
    }
  })
  .catch(error => {
    console.error('Erro:', error);
    // Se ocorrer um erro na requisição, você pode tratar aqui
  });
});