// ? Add days and months to display on the web page.
let date = new Date();

let daysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

let day = daysOfWeek[date.getDay()];
let month = months[date.getMonth()];
let year = date.getFullYear();

const currentYear = document.querySelector('#year');
const dateString = document.querySelector('#dateString');

currentYear.textContent = year;
dateString.textContent = `${day} ${month} ${date.getDate()}, ${year}`;

let toggleMenu = function() {
    document.querySelector('#primaryNav').classList.toggle('open');
    document.querySelector('#hamBtn').classList.toggle('open');
} 

const x = document.querySelector('#hamBtn');
x.onclick = toggleMenu;

let checkDay = function(day) {
    if(day + date.getDay() > 6) {
        return day + date.getDay() - 7;
    } else {
        return day + date.getDay();
    }
}

const apiKey = '04b547f273ce7c2a508cfc0edeccc96c';
const city = 'Johannesburg';
const apiUrl = 'https://api.openweathermap.org/data/2.5/forecast?'
    + 'lat=-26.195246&lon=28.034088&d=' + city + '&units=metric&appid=' 
    + apiKey;


fetch(apiUrl)
    .then(response => response.json())
    .then(jsonData => {
        for(let i = 0; i < 5; i ++) {
            document.querySelector('#day' + (i + 1)).textContent = daysOfWeek[checkDay(i)];
        }

        for(let i = 0; i < 5; i ++) {
            document.querySelector('#img' + (i + 1)).src = `https://openweathermap.org/img/w/${jsonData.list[i].weather[0].icon}.png`;
        }

        for(let i = 0; i < 5; i ++) {
            document.querySelector('#temp' + (i + 1) ).innerHTML = `${jsonData.list[i].main.temp.toFixed(0)}&deg;C`;
        }

        for(let i = 0; i < 5; i ++) {
            document.querySelector('#condition' + (i + 1)).textContent = jsonData.list[i].weather[0].description;
        }

        // console.log(jsonData);
    })