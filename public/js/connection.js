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

const deleteClickHandler = async function() {
  await fetch(`/api/notes/${id}`, {
    method: 'DELETE'
  });
  document.location.replace('/connection');
};

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");
//     //console.log("data-id");
//     const response = await fetch(`/api/notes/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/profile");
//     } else {
//       alert("Failed to delete post");
//     }
//   }
// };

document
  .querySelector(".new-connection-form")
  .addEventListener("submit", newFormHandler);
  document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);

// document
//   .querySelector(".post-list")
//   .addEventListener("click", delButtonHandler);
