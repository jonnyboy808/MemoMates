const signupFormHandler = async (event) => {
    event.preventDefault();
  
    // queryselector for username and password
    const emailEl = document.querySelector("#email-input-signup").value;
    const passwordEl = document.querySelector("#password-input-signup").value;
  

    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ 
        email: emailEl.value,
        password: passwordEl.value,
}),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/connection");
    } else {
      alert("Failed to sign up");
    }
  };
  
  document
    .querySelector("#signup-form")
    .addEventListener("submit", signupFormHandler);
  