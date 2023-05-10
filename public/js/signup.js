const signupFormHandler = async function(event) {
    event.preventDefault();
  
    // queryselector for username and password
    const email = document.querySelector('#email-input-signup');
    const password = document.querySelector('#password-input-signup');
  
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/connection');
    } else {
      alert('Failed to sign up');
    }
  };
  
  document
    .querySelector('#signup-form')
    .addEventListener('submit', signupFormHandler);
  