let date = new Date();

let daysOfWeek = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
];

let months = [
    'Jan',
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

let day = daysOfWeek[date.getDay()];
let month = months[date.getMonth()];
let year = date.getFullYear();

const currentYear = document.querySelector('#year');
const dateString = document.querySelector('#dateString');

currentYear.textContent = year;
dateString.textContent = `${day} ${date.getDate()} ${month}, ${year} `