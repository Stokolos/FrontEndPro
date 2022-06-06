const elements = () => {
    const wrapperClock = document.createElement("div");
    wrapperClock.classList.add("clock");

    // const arr = ["numerHoursFirst", "numerHoursSecond", "colonFirst", "numerMinutesFirst", "numerMinutesSecond", "colonSecond", "numerSecondsFirst", "numerSecondsSecond"];
    // for (let i = 0; i < arr.length; i++) {
    //     const wrapperNum = document.createElement("div")
    //     wrapperNum.classList.add("div")
    //     wrapperNum.id = arr[i]
    //     wrapperClock.append(wrapperNum)
    // }

    return wrapperClock
}

const timer = setInterval(() => {
    const clock = document.querySelector(".clock")
    clock.textContent = ""
    tm(times())
    console.log(times())
}, 1000)


function times() {
    let date = new Date()
    
    let hours = date.getHours().toString().padStart(2, "0");
    let minutes = date.getMinutes().toString().padStart(2, "0");
    let seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`

}


const tm = (item) => {  
    const arr = ["numerHoursFirst", "numerHoursSecond", "colonFirst", "numerMinutesFirst", "numerMinutesSecond", "colonSecond", "numerSecondsFirst", "numerSecondsSecond"];
    
    for (const key of item) {
        const da = document.querySelector(".clock")
        const d = document.createElement("div")
        d.classList.add(arr[item.indexOf(key)])
        d.textContent = key
        da.append(d)
    }
}



document.body.append(elements())
tm(times())