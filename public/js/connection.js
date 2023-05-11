const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#connection-name").value.trim();
  const word = document.querySelector("#one-word").value.trim();
  const last_contact = document.querySelector("#last-contact").value.trim();
  const details = document.querySelector("#details").value.trim();
  const steps = document.querySelector("#steps").value.trim();

  if (name && word) {
    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ name, word, last_contact, details, steps }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("newFormHandler: api/post POST method called");

    if (response.ok) {
      console.log("newFormHandler: response was OK");
      document.location.replace("/connection");
    } else {
      alert("Failed to create post");
    }
  }
};

document.querySelector(".new-connection-form").addEventListener("submit", newFormHandler);


  const deleteClickHandler = async function() {

    const id = this.dataset.id;
    const response = await fetch(`/api/notes/${id}`, {
      method: 'DELETE'
    });
  
    if (response.status === 200) {
    document.location.replace('/connection');
  } else {
    alert('There was an error deleting the note.');
  }
};

  document.querySelector('.delbtn').addEventListener("click", deleteClickHandler);







// document
//   .querySelector(".post-list")
//   .addEventListener("click", delButtonHandler);
