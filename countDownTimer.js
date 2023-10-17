const ny = "1 Jan 2024";

let dayEl = document.querySelector("#days");
let hourEl = document.querySelector("#hour");
let minEl = document.querySelector("#min");
let secEl = document.querySelector("#sec");

init();

function init() {
        countdown();
        setInterval(countdown, 1000);
};

function countdown() {
    const nydate = new Date(ny);
    const currentDate = new Date();

    const totalSeconds = (nydate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);
    
    // console.log(days, hours, minutes, seconds);

    dayEl.innerText = formatTime(days);
    hourEl.innerText = formatTime(hours);
    minEl.innerText = formatTime(minutes);
    secEl.innerText = formatTime(seconds);
};

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
};