document.getElementById('showRegisterForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').classList.add('form-hidden');
    document.getElementById('registerForm').classList.remove('form-hidden');
  });

  document.getElementById('showLoginForm').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginForm').classList.remove('form-hidden');
    document.getElementById('registerForm').classList.add('form-hidden');
  });