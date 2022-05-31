const wraperElements = () => {
    const div = document.createElement("div");
    div.classList.add("div");

    const divOl = document.createElement("div");
    divOl.classList.add("divOl");

    const ol = document.createElement("ol");
    ol.classList.add("ol");

    const mainPage = document.createElement("p");
    mainPage.classList.add("mainPage");
    mainPage.textContent = "Главная страница";

    const p = document.createElement("p");
    p.classList.add("p");
    p.textContent = "Страница: ";

    const span = document.createElement("span");
    span.classList.add("span");

    const wrapperButton = document.createElement("div");
    wrapperButton.classList.add("wrapperButton");

    const nextButton = document.createElement("button");
    nextButton.classList.add("nextButton");
    nextButton.textContent = "Next Button";

    const prevButton = document.createElement("button");
    prevButton.classList.add("prevButton");
    prevButton.textContent = "Prev Button";
    prevButton.disabled = true;

    divOl.append(ol);
    ol.append(mainPage);
    p.append(span);
    wrapperButton.append(prevButton, nextButton);
    div.append(divOl, p, wrapperButton);

    return div
}

const conect = (props) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.onload = function () {
        if (xhr.status === 200) {
            props.onLoadSuccess(xhr.response);
        } else {
            props.onLoadError();
        }
    }

    xhr.onerror = props.onLoadError;
    const span = document.querySelector(".span")
    xhr.open("GET", `https://rickandmortyapi.com/api/character?page=${span.textContent}`);

    props.onLoadStart();
    setTimeout(() => {
        xhr.send();
    }, 2000)
}

const nextButtonPlus = () => {
    const spanCount = document.querySelector(".span");
    spanCount.textContent++
}

const prevButtonMinus = () => {
    const spanCount = document.querySelector(".span");
    spanCount.textContent--
}

const wrapperButtonAction = () => {
    const prevButtonAction = document.querySelector(".prevButton");
    const nextButtonAction = document.querySelector(".nextButton");

    prevButtonAction.addEventListener("click", event => {
        event.preventDefault();

        prevButtonMinus();
        
        const spanCount = document.querySelector(".span");
        const ol = document.querySelector(".ol");
        ol.textContent = ""
        ol.setAttribute("start", (Number(spanCount.textContent) * 20 - 19));

        conect({
            onLoadStart: prevButtonLoadingState,
            onLoadSuccess: data => {
                renderList(data.results);
                prevButtonInitialState();
            },
            onLoadError: () => {
                alert("Error loading data!");
                prevButtonInitialState();
            }
        });
    })

    nextButtonAction.addEventListener("click", event => {
        event.preventDefault();

        nextButtonPlus();

        const spanCount = document.querySelector(".span");
        const ol = document.querySelector(".ol");
        ol.textContent = ""
        ol.setAttribute("start", (Number(spanCount.textContent) * 20 - 19));

        conect({
            onLoadStart: nextButtonLoadingState,
            onLoadSuccess: data => {
                renderList(data.results);
                nextButtonInitialState();
            },
            onLoadError: () => {
                alert("Error loading data!");
                nextButtonInitialState();
            }
        })
    })
}

const button = () => {
    const nextButton = document.querySelector(".nextButton");
    const prevButton = document.querySelector(".prevButton");
    const spanCount = document.querySelector(".span");
    if (spanCount.textContent < 2) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }
    
    if (spanCount.textContent > 41) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

const renderList = (items) => {
    const div = document.querySelector(".divOl");
    const ol = document.querySelector(".ol");

    for (const item of items) {
        const listElement = document.createElement("li");
        listElement.classList.add("li");
        listElement.textContent = item.name;
        ol.appendChild(listElement);
    }

    div.innerHTML = "";
    div.appendChild(ol);
}

const nextButtonLoadingState = () => {
    const loadButtonNext = document.querySelector(".nextButton");
    const loadButtonPrev = document.querySelector(".prevButton");
    loadButtonNext.textContent = "Loading...";

    loadButtonNext.disabled = true;
    loadButtonPrev.disabled = true;
}

const nextButtonInitialState = () => {
    const loadButton = document.querySelector(".nextButton");
    loadButton.textContent = "Next Page";
    button();
}

const prevButtonLoadingState = () => {
    const loadButtonPrev = document.querySelector(".prevButton");
    const loadButtonNext = document.querySelector(".nextButton");
    loadButtonPrev.textContent = "Loading...";
    
    loadButtonPrev.disabled = true;
    loadButtonNext.disabled = true
}

const prevButtonInitialState = () => {
    const loadButton = document.querySelector(".prevButton");
    loadButton.textContent = "Prev Page";
    button();
}

document.body.append(wraperElements());
wrapperButtonAction();