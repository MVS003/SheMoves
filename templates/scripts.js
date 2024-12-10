// scripts.js
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const criteria = {
      length: password.length >= 8,
      numbers: (password.match(/\d/g) || []).length >= 2,
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
    };
  
    Object.keys(criteria).forEach((key) => {
      document.getElementById(key).style.color = criteria[key] ? 'green' : 'red';
    });
  
    if (password === confirmPassword && Object.values(criteria).every((value) => value)) {
      alert('Cadastro validado com sucesso!');
    } else {
      alert('Por favor, corrija os erros antes de continuar.');
    }
  });
