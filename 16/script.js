// const element = () =>{
//     const wrapperElement = document.createElement("div");
//     wrapperElement.classList.add("wrapperElement");

//     const olElement = document.createElement("ol");
//     olElement.classList.add("olElement");

//     const page = document.createElement("p");
//     page.classList.add("page");
//     page.textContent = "Страница: "

//     const numberPage = document.createElement("span");
//     numberPage.classList.add("numberPage");

//     const addPageButton = document.createElement("button");
//     addPageButton.classList.add("addPageButton");
//     addPageButton.textContent = "Add";

//     page.append(numberPage);
//     wrapperElement.append(olElement, page, addPageButton)

//     return wrapperElement
// }



// document.body.append(element())

const appi = "https://rickandmortyapi.com/api/character";

const post = fetch(appi)
    .then(response => response.json())
    .then(data => {
        const res = data.name
        console.log(res)
    })

