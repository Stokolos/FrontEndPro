const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");
const wrapper = document.createElement("div");
const ul = document.createElement("ul");
let arr = [];
const key = "list";

function createTodo() {
  form.classList.add("input-group", "mb-3");
  input.classList.add("form-control");
  input.placeholder = "Введите текст";
  button.classList.add("btn", "btn-primery");
  wrapper.classList.add("input-group-append");
  button.textContent = "Отправить";

  wrapper.append(button);
  form.append(input);
  form.append(wrapper);

  return form;
}

document.body.appendChild(createTodo());

function load() {
  try {
    const data = localStorage.getItem("list");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    return [];
  }
}

function liList(text) {
  const liItem = document.createElement("li");
  const buttonRemove = document.createElement("button");
  liItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );

  buttonRemove.classList.add("btn", "btn-danger");
  liItem.innerHTML = text;
  buttonRemove.textContent = "Удалить";

  liItem.append(buttonRemove);
  buttonRemove.addEventListener("click", (event) => {
    event.preventDefault();
    const li = liItem;
    ul.removeChild(li);

    const list = load();
    const listUpdated = list.filter((l) => l !== text);

    localStorage.setItem(key, JSON.stringify(listUpdated));
  });

  return liItem;
}

function inputArr(ar) {
  ar.push(input.value);
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  const li = liList(input.value);
  ul.append(li);
  inputArr(arr);
  localStorage.setItem(key, JSON.stringify(arr));
  input.value = "";
});

document.body.append(ul);


// Проверяем результат