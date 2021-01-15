const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


const newYears = '25 Dec 2021';

function countdown () {
    const newYearsDate = new Date(newYears);
    const currentDate =  new Date;

    const totalSeconds = new Date (newYearsDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);      //(Interger number), calculate the days remaining for the countdown
    const hours = Math.floor(totalSeconds / 3600) % 24;     //calculate remaining hour to 24hours cycle
    const mins = Math.floor(totalSeconds / 60) % 60;     //calculate remaining minutes to 1hour cycle
    const seconds = Math.floor(totalSeconds) % 60;          //calculate remaining seconds to 1minute cycle
                                                            //%x number, ritorna il valore per quante volte è divisibile; 8 % 3 = 2
    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds); //get the data for the clock


    // console.log(hours,days, mins, seconds)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call

countdown();

setInterval(countdown, 1000) //1000ms of update = 1s update

