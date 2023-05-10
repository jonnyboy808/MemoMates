const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-input-signup').value.trim();
  const email = document.querySelector('#email-input-signup').value.trim();
  const password = document.querySelector('#password-input-signup').value.trim();

  if (email && password) {
    console.log(email, password);
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace("/connection");
    } else {
      alert(response.statusText);
    }
  }
};
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  