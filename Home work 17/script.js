const elements = () => {
    const wrapperClock = document.createElement("div");
    wrapperClock.classList.add("clock");

    return wrapperClock
}

setInterval(() => {
    renderClock(createTimeObj())
}, 1000);

const createTimeObj = (date = new Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${hours} : ${minutes} : ${seconds}`;
}

const renderClock = (dateString) => {
    const wrapperClock = document.querySelector(".clock")
    wrapperClock.textContent = ""

    const [ hours, colon ,minutes, colonSecond ,seconds ] = dateString.split(" ");

    const arr = [[hours,"hour"],[colon, "colon"],[minutes, "min"],[colonSecond,"colon"],[seconds, "sec"]].map(item => {
        const el = createElement("div", item[1]);
        el.textContent = item[0] === "" ? ":" : checkForZero(item[0])

        return el;
    })

    arr.forEach(item => wrapperClock.appendChild(item));
} 

const checkForZero = (i) => {
    return i < 10 ? "0" + i : i
}

const createElement = (type, selector) => {
    const elements =  document.createElement(type);
    elements.classList.add(selector);
    return elements;
}

document.body.append(elements())
renderClock(createTimeObj())