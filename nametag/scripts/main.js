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
        return response.json();
    })

    .then(function (jsonTags) {
        console.log(jsonTags);
        const persons = jsonTags['persons']
        const nameTag = document.querySelector('div.nameTags');

        persons.forEach(person => {
            let tag = document.createElement('section');
            let hello = document.createElement('h1');
            let greeting = document.createElement('p');
            let persoName = document.createElement('h1');
            persoName.style.fontFamily = 'fantasy';
            persoName.style.fontSize = '3rem';

            hello.textContent = `HELLO`;
            greeting.textContent = `My name is...`;
            persoName.textContent = `${person.firstName}`;

            tag.append(hello);
            tag.append(greeting);
            tag.append(persoName);

            nameTag.append(tag);
        });
        
    })