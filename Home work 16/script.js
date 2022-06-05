const element = () => {
    const wrapperElement = document.createElement("div");
    wrapperElement.classList.add("wrapperElement");

    const olElement = document.createElement("ol");
    olElement.classList.add("olElement");

    const page = document.createElement("p");
    page.classList.add("page");
    page.textContent = "Страница: "

    const numberPage = document.createElement("span");
    numberPage.classList.add("numberPage");

    const addPageButton = document.createElement("button");
    addPageButton.classList.add("addPageButton");
    addPageButton.textContent = "Get data";

    page.append(numberPage);
    wrapperElement.append(olElement, page, addPageButton)

    return wrapperElement
}

function conect(){
    const numberPage = document.querySelector(".numberPage")
    return fetch(`https://rickandmortyapi.com/api/character/?page=${numberPage.textContent}`)
        .then(response => {
            if(response.status === 200){
                return response.json()
            }
            Promise.reject(response)
        })
        .catch(err => reject(err))
}

function conectPage(){
    conect()
    .then(res => {
        setTimeout(() => {
            listText(res.results)
            ButtonInitialState()
        }, 2000)
    })
    .catch(err => new Error(err))
    .finally(() => {
        ButtonLoadingState()
        deleteText()
    })
}

const listText = (items) => {
    const olElement = document.querySelector(".olElement")
    const spanCount = document.querySelector(".numberPage")
    olElement.setAttribute("start", (Number(spanCount.textContent) * 20 - 19))
    for(let item of items) {
        const li = document.createElement("li");
        li.classList.add("list");
        li.textContent = item.name;
        olElement.appendChild(li);
    };
}

const buttonAction = () => {
    const buttonClick = document.querySelector(".addPageButton");
    buttonClick.addEventListener("click", event => {
        event.preventDefault();
        numberPage()
        conectPage()
    })
}

const numberPage = () => {
    const spanCount = document.querySelector(".numberPage");
    spanCount.textContent++
}

const deleteText = () => {
    const olElement = document.querySelector(".olElement");
    olElement.textContent = ""
}

const ButtonInitialState = () => {
    const addPageButton = document.querySelector(".addPageButton");
    addPageButton.textContent = "Get data";
    button();
}

const ButtonLoadingState = () => {
    const addPageButton = document.querySelector(".addPageButton");
    addPageButton.textContent = "Getting data";

    addPageButton.disabled = true;
}

const button = () => {
    const addPageButton = document.querySelector(".addPageButton");
    const spanCount = document.querySelector(".numberPage");
    
    if (spanCount.textContent > 41) {
        addPageButton.disabled = true;
    } else {
        addPageButton.disabled = false;
    }
}

document.body.append(element())
buttonAction()