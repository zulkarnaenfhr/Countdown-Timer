const moveJudul = document.querySelector(".judul");
const moveDays = document.querySelector(".days");
const moveHours = document.querySelector(".hours");
const moveMinutes = document.querySelector(".minutes");
const moveSeconds = document.querySelector(".seconds");

const tl = new TimelineMax();

tl.fromTo(moveJudul, 0.7, { y: "-30", opacity: 0 }, { y: "0", opacity: 1 })
    .fromTo(moveDays, 1, { y: "-30", opacity: 0 }, { y: "0", opacity: 1 })
    .fromTo(moveHours, 1, { y: "-30", opacity: 0 }, { y: "0", opacity: 1 })
    .fromTo(moveMinutes, 1, { y: "-30", opacity: 0 }, { y: "0", opacity: 1 })
    .fromTo(moveSeconds, 1, { y: "-30", opacity: 0 }, { y: "0", opacity: 1 });

const timerDays = document.getElementById("days");
const timerHours = document.getElementById("hours");
const timerMinutes = document.getElementById("minutes");
const timerSeconds = document.getElementById("seconds");

const newYears = "1 januari 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    timerDays.innerHTML = days;
    timerHours.innerHTML = formatTime(hours);
    timerMinutes.innerHTML = formatTime(minutes);
    timerSeconds.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
