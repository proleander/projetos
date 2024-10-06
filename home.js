// home.js

function goTo(page) {
    alert(`Redirecionando para a página: ${page}`);
    // Aqui você pode redirecionar para outras páginas, se estiver usando várias.
    // window.location.href = `${page}.html`; // Exemplo para redirecionar
  }
  
  function logout() {
    alert('Você foi desconectado.');
    window.location.href = 'login.html'; // Redireciona para a tela de login
  }
  