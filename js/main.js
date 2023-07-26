let daysOfWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

let _months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let date = new Date();
let dayName = daysOfWeek[date.getDay()];
let month = _months[date.getMonth()];
let year = date.getFullYear();

// const lastTwoNumYear = year % 100;
const fullDate = ` ${dayName} ${date.getDate()} ${month} • ${year}`;

document.querySelector('#year').textContent = year;
document.querySelector('#dateTime').textContent = fullDate;

const nameTag = document.querySelector('div.nameTag');
const h1 = document.createElement('h1');
const p = document.createElement('p');
const h2 = document.createElement('h2');

// const jsonUrl = 


