const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#connection-name").value.trim();
  const history = document.querySelector("#history").value.trim();

  if (name && history) {
    const response = await fetch("/api/notes", {
      method: "POST",
      body: JSON.stringify({ name, history }),
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

// document
//   .querySelector(".post-list")
//   .addEventListener("click", delButtonHandler);
