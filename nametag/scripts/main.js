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

const fullDate = `${dayName} ${date.getDate()} ${month}, ${year}`;

document.querySelector('#year').textContent = year;
document.querySelector('#dateTime').textContent = fullDate;

// ? This is the part of my code were I add my name tags dynamically
// ? from this json url.
const jsonUrl = 'https://abdulmahl.github.io/myportal/nametag/json/data.json';

fetch(jsonUrl)
    .then(function (response) {
        // return response.json();
        console.log(response);
    })

    .then(function (jsonTags) {
        const names = jsonTags['Persons']

        const nameTag = document.querySelector('div.nameTag');
        const tag = document.createElement('div');
        const hello = document.createElement('h1');
        const greeting = document.createElement('p');
        const persoName = document.createElement('h2');
    })