// login.js

function handleLogin(event) {
  event.preventDefault(); // Previne o comportamento padrão de recarregar a página ao enviar o formulário

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  // Simulando uma verificação de login (substitua pela lógica de backend que você quiser)
  if (username === "admin" && password === "1234") {
    // Redireciona para o dashboard se o login estiver correto
    window.location.href = "home.html";
  } else {
    // Exibe mensagem de erro se o login falhar
    errorMessage.textContent = "Usuário ou senha inválidos!";
  }
}
