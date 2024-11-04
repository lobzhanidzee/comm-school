const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");
const modalWindow = document.querySelector(".modal-window");

const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("user-email");
const password = document.getElementById("user-password");
const passwordRepeat = document.getElementById("repeat-password");

const modal = function () {
  modalWindow.classList.toggle("hidden");
};

const check = (e) => {
  for (let i = 0; i < e.target.value.length; i++) {
    if (e.target.value.length < 3) {
      e.target.style.borderBottom = "1px solid red";
    } else {
      e.target.style.borderBottom = "1px solid #2293e9";
    }
  }
};

openModalBtn.addEventListener("click", modal);
closeModalBtn.addEventListener("click", modal);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal();
});

firstName.addEventListener("keyup", check);

lastName.addEventListener("keyup", check);

email.addEventListener("keyup", check);

password.addEventListener("keyup", (e) => {
  for (let i = 0; i < e.target.value.length; i++) {
    if (e.target.value.length < 7) {
      password.style.borderBottom = "1px solid red";
    } else {
      password.style.borderBottom = "1px solid #2293e9";
    }
  }
});

passwordRepeat.addEventListener("keyup", (e) => {
  for (let i = 0; i < e.target.value.length; i++) {
    if (e.target.value !== password.value) {
      passwordRepeat.style.borderBottom = "1px solid red";
    } else {
      passwordRepeat.style.borderBottom = "1px solid #2293e9";
    }
  }
});
