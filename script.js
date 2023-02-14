const form = document.getElementById('sign-up-form');
const password = form.elements['password'];
const confirmPassword = form.elements['confirm-password'];

form.addEventListener('submit', function(event) {
  if (password.value !== confirmPassword.value) {
    event.preventDefault();
    password.classList.add('error');
    confirmPassword.classList.add('error');
  } else {
    password.classList.remove('error');
    confirmPassword.classList.remove('error');
  }
});