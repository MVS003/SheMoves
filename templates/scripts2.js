  
function navigateTo(page) {
    const welcomeContainer = document.querySelector('.welcome-container');
    const loginContainer = document.querySelector('.login-container');
    
    if (page === 'login') {
      window.location.href = 'login.html';
    } else if (page === 'register') {
      window.location.href = 'cadastro-escolha.html'; // Redireciona para a página de cadastro
    } else if (page === 'cadastro-profissional') {
      window.location.href = 'cadastro-profissional.html'; // Redireciona para a página de cadastro
    } else if (page === 'cadastro-cliente') {
      window.location.href = 'cadastro-cliente.html'; // Redireciona para a página de cadastro
    }
  }
  
  function togglePassword() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
  }
  