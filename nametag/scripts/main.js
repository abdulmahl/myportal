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
        // console.log(jsonTags);
        const persons = jsonTags['persons']
        const nameTag = document.querySelector('div.nameTags');

        persons.forEach(person => {
            let tag = document.createElement('section');
            let hello = document.createElement('h1');
            hello.style.padding = '10px';
            hello.style.fontSize = '2rem';
            let greeting = document.createElement('p');
            greeting.style.backgroundColor = 'white';
            let personName = document.createElement('h1');
            personName.style.fontFamily = 'Mynerve';
            personName.style.fontSize = '3rem';
            personName.style.padding = '20px 0px 0px 0px';

            hello.textContent = `HELLO`;
            greeting.textContent = `My name is...`;
            personName.textContent = `${person.firstName}`;

            tag.append(hello);
            tag.append(greeting);
            tag.append(personName);

            nameTag.append(tag);
        });
        
    })