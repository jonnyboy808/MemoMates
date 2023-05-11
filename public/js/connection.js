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

// const deleteClickHandler = (event) => {
//   event.preventDefault();

//   const id = event.target.dataset.id;

//   // Make a request to the API to delete the note
//   fetch(`/api/notes/${id}`, {
//     method: "DELETE",
//   })
//     .then((response) => {
//       if (response.ok) {
//         // The note was deleted successfully, so redirect the user to the connection page
//         document.location.replace("/connection");
//       } else {
//         alert("Failed to delete note");
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };


document
  .querySelector(".new-connection-form")
  .addEventListener("submit", newFormHandler);

  document
  .querySelector('.btn')
  .addEventListener("submit", deleteClickHandler);

// document
//   .querySelector(".post-list")
//   .addEventListener("click", delButtonHandler);
