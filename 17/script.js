const elements = () => {
    const wrapperClock = document.createElement("div");
    wrapperClock.classList.add("clock");
    
    return wrapperClock
}

setInterval(()=> {
    const date = new Date()
    const time = document.querySelector(".clock")

    let hours = date.getHours();
    let minutes = addZero(date.getMinutes());
    let second = addZero(date.getSeconds());

    let clock = `${hours} : ${minutes} : ${second}`

    time.innerHTML = clock
})

const addZero = (d) => {
    const time = (d < 10) ? "0" + d : d
    return time
}

document.body.append(elements())