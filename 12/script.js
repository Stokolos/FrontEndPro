// Дано 5 квадратов, внутри каждого из которых изначально вписана цифра 0. При клике на любой квадрат цифра в нем увеличивается на один.
// * сделать чтоб внутри квадратов были кнопки +/-
function boxNumClick() {
    const numChainge = document.querySelectorAll(".numChainge")
    const boxNum = document.querySelectorAll(".boxNum")
    const plus = document.querySelectorAll(".plus")
    const minus = document.querySelectorAll(".minus")

    for (let i = 0; i < boxNum.length; i++) {
        const button = boxNum[i];
        const count = numChainge[i];

        button.addEventListener("click", event => {
            if (event.target === plus[i]) {
                count.value++;
            } else if (event.target === minus[i]) {
                count.value--;
            }
        });
    }
}

boxNumClick()

// Дано 5 квадратов. Каждый по клику меняет цвет (синий -> зеленый -> желтый)

function changeColorsBoxes() {

    const boxes = document.querySelectorAll(".chaingeBoxColor");

    for (let i = 0; i < 5; i++) {
        let box = boxes[i];

        box.addEventListener("click", () => {
            if (box.classList.contains("chaingeBoxColor")) {
                box.classList.remove("chaingeBoxColor");
                box.classList.add("blue");
            } else if (box.classList.contains("blue")) {
                box.classList.remove("blue");
                box.classList.add("green");
            } else if (box.classList.contains("green")) {
                box.classList.remove("green");
                box.classList.add("yellow");
            } else if (box.classList.contains("yellow")) {
                box.classList.remove("yellow");
                box.classList.add("blue");
            }
        });
    }
}

changeColorsBoxes()

// Сделать список. По клику на любой из элементов он выделяется красным цветом. Если один уже выделен, а кликнули по другому, то выделение с прошлого снимается, и ставится на тот, по которому кликнули.

function boxFocus() {
    const ulBox = document.querySelector(".ulBox");
    const boxFocus = document.querySelectorAll(".boxFocus");

    for (let b = 0; b < boxFocus.length; b++) {
        let itm = boxFocus[b]
        ulBox.addEventListener("click", event => {
            if (itm.classList.contains("red")) {
                itm.classList.remove("red");
            }

            event.target.classList.add("red");
        })
    }
}

boxFocus()