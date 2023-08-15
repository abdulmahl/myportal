const date = new Date();

let daysOfWeek = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

let monthsOfYear = [
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
let month = monthsOfYear[date.getMonth()];
let year = date.getFullYear();

function toggleMenu() {
    document.querySelector('#hamburgerBtn').classList.toggle('open');
    document.querySelector('#primaryNav').classList.toggle('open');
}

const click = document.querySelector('#hamburgerBtn');
click.onclick = toggleMenu;