const elements = () => {
    const wrapperClock = document.createElement("div");
    wrapperClock.classList.add("clock");
  
    return wrapperClock
  }
  
  setInterval(() => {
    renderClock(JSClock())
  }, 10000);
  
  // const createTimeObj = (date = new Date) => {
  //     const hours = date.getHours();
  //     const minutes = date.getMinutes();
  //     const seconds = date.getSeconds();
  
  //     return `${hours} : ${minutes} : ${seconds}`;
  // }
  
  function JSClock() {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let day_night = "AM"
    if (hour > 12) {
        day_night = "PM";
        hour = hour - 12
    }
    return `${hour} : ${minute} : ${second} ${day_night}`;
  }
  
  
  const renderClock = (item) => {
    const wrapperClock = document.querySelector(".clock")
    wrapperClock.textContent = ""
    for (const key of item) {
        const el = createElement("div")
        el.textContent = key
        wrapperClock.append(el)
        
    }
  }
  
  const checkForZero = (i) => {
    return i < 10 ? "0" + i : i
  }
  
  const createElement = (type) => {
    
    const elements = document.createElement(type);
    for(i = 0; i < el.length; i++) {
      el.classList.add("item-" + i)
    };
    return elements;
  }
  
  document.body.append(elements())
  renderClock(JSClock())