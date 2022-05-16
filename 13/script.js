const form = document.createElement("form");
const mailInput = document.createElement("input");
const passwordInput = document.createElement("input");
const button = document.createElement("button");

function boxStyle() {
  mailInput.setAttribute("type", "email");
  mailInput.setAttribute("placeholder", "e-mail");
  mailInput.classList.add("mail");
  form.appendChild(mailInput);

  passwordInput.setAttribute("type", "password");
  passwordInput.setAttribute("placeholder", "password");
  passwordInput.classList.add("password");
  form.appendChild(passwordInput);

  button.textContent = "Отправить";
  button.classList.add("button");
  button.disabled = true;
  form.appendChild(button);

  return form;
}

document.body.appendChild(boxStyle());

function isValidEmail(email) {
  return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email);
}

function isValidPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*[!@#$%^&*? ])(?=.{8,}).*$/.test(password); // Пароль должен содержать одну букву, одну цифру и один спец. символ проверил на Regex
}

function setButtonDisabled() {
  button.disabled = !validMail || !validPassword;
}

let validMail = false;
let validPassword = false;

mailInput.addEventListener("blur", event => {
  const { value } = event.target;
  validMail = isValidEmail(value);

  if (value !== "" && !validMail) {
    event.target.classList.add("error");
  }

  event.target.classList.remove("blue");

  setButtonDisabled();
})

passwordInput.addEventListener("blur", event => {
  const { value } = event.target;
  validPassword = !validPassword;

  if (value !== "" && !isValidPassword(value)) {
    event.target.classList.add("error");
  }

  event.target.classList.remove("blue");

  setButtonDisabled();
})

function focus(event) {
  event.target.classList.remove("error");
  event.target.classList.add("blue");
}

mailInput.addEventListener("focus", focus);
passwordInput.addEventListener("focus", focus);

mailInput.addEventListener("input", event => {
  validMail = isValidEmail(event.target.value);

  setButtonDisabled();
});

passwordInput.addEventListener("input", event => {
  validPassword = isValidPassword(event.target.value);

  setButtonDisabled();
});

form.addEventListener("submit", event => {
  event.preventDefault();

  const email = mailInput.value;
  const password = passwordInput.value;
  console.log({ email, password });

  mailInput.value = "";
  passwordInput.value = "";

  setButtonDisabled();
})