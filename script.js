const form = document.querySelector("form");
const message = document.querySelector(".message");
const regEx = /^[a-zA-Z]{6,16}$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = form.username.value;
  if (regEx.test(username)) {
    message.textContent = "You successfully signed in.";
    message.classList.add("success");
  } else {
    message.textContent =
      "Your username is invalid. (Use only 6 to 12 letters)";
    message.classList.add("error");
  }
});
