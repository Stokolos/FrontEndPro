function createUl() {
  const ul = document.createElement("ul");

  return ul;
}

function createLi(element) {
  const ul = document.createElement("li");
  ul.innerText = element;

  return ul;
}

function result(elements) {
  const make = createUl();
  for (let i = 0; i < elements.length; i++) {
    if (Array.isArray(elements[i])) {
      const html = result(elements[i]);
      make.appendChild(html);
    } else {
      const li = createLi(elements[i]);
      make.appendChild(li);
    }
  }
  return make;
}

document.body.append(result([1, 2, 3]));
document.body.append(result([1, 2, [1.1, 1.2, 1.3], 3]));
