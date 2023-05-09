const loginFormHandler = async function(event) {
  event.preventDefault();

  const usernameEl = document.querySelector('#email-input-login');
  const passwordEl = document.querySelector('#password-input-login');

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({
      email: usernameEl.value,
      password: passwordEl.value,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/saved-connections');
  } else {
    alert('Failed to login');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
