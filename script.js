// const form = document.querySelector("#messageForm");

// form.addEventListener("submit", (event) => {
//   // handle the form data

//   event.preventDefault();
//   const message = document.querySelector("#message");
//   const feedback = document.querySelector(".feedback");
//   const messageContent = document.querySelector(".message-content");

//   if (message.value === "") {
//     feedback.classList.add("show");
//     setTimeout(function () {
//       feedback.classList.remove("show");
//     }, 2000);
//   } else {
//     messageContent.textContent = message.value;
//     message.value = "";
//   }
// });

const form = document.querySelector("#messageForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector("#message");
  const feedback = document.querySelector(".feedback");
  const messageContent = document.querySelector(".message-content");

  if (message.value === "") {
    feedback.classList.add("show");
  } else {
    messageContent.textContent = message.value;
    message.value = "";
  }
});
