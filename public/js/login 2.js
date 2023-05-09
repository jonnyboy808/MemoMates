const loginFormHandler = async function(event) {
    event.preventDefault();
  
    const emailEl = document.querySelector('#email-login');
    const passwordEl = document.querySelector('#password-login');
  
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({
        username: emailEl.value,
        password: passwordEl.value,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to login');
    }
  };
  
  console.log(document.querySelector('.login-form')); 
  document
// should output the element object if it exists

    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);

    // const signupFormHandler = async function(event) {
    //     event.preventDefault();
      
    //     const signupUserEl = document.querySelector('#username-signup');
    //     const signupEmailEl = document.querySelector('#email-signup')
    //     const signupPassEl = document.querySelector('#password-input-signup');
      
    //     const response = await fetch('/api/user', {
    //       method: 'POST',
    //       body: JSON.stringify({
    //         username: signupUserEl.value,
    //         email: signupEmailEl.value,
    //         password: signupPassEl.value,
    //       }),
    //       headers: { 'Content-Type': 'application/json' },
    //     });
      
    //     if (response.ok) {
    //       document.location.replace('/');
    //     } else {
    //       alert('Failed to sign up');
    //     }
    //   };
      
    //   document
    //     .querySelector('#signup-form')
    //     .addEventListener('submit', signupFormHandler);