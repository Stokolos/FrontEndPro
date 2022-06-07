const elements = () => {
    const wrapperClock = document.createElement("div");
    wrapperClock.classList.add("clock");

    return wrapperClock
}

setInterval(() => {
    renderClock(createTimeObj())
}, 1000);

const createTimeObj = (date = new Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours} : ${minutes} : ${seconds}`;
}

const renderClock = (dateString) => {
    const wrapperClock = document.querySelector(".clock")
    wrapperClock.textContent = ""

    const [ hours, colon ,minutes, colonSecond ,seconds ] = dateString.split(" ");

    const arr = [[hours,"hour"],[colon, "colon"],[minutes, "min"],[colonSecond,"colon"],[seconds, "sec"]].map(item => {
        const el = createElement("div", item[1]);
        el.textContent = item[0];

        return el;
    })

    arr.forEach(item => wrapperClock.appendChild(item));
} 

const createElement = (type, selector) => {
    const elements =  document.createElement(type);
    elements.classList.add(selector);
    return elements;
}

document.body.append(elements())
renderClock(createTimeObj())