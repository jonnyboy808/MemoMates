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
