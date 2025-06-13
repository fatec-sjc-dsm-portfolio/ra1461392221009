document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('#contato-section form');
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(form);
      const action = form.getAttribute('action');
      const method = form.getAttribute('method') || 'POST';

      try {
        const response = await fetch(action, {
          method: method,
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          alert('Mensagem enviada com sucesso!');
          form.reset();
        } else {
          alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
        }
      } catch (error) {
        alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
      }
    });
  }
});