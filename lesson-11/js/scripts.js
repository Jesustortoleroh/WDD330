function toggleMenu() {
    console.log(document.getElementById("primaryNav").classList);
    document.getElementById("primaryNav").classList.toggle("hide");
}

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const date = new Date();
const dayOfMonth = date.getDate();
const year = date.getFullYear();
const day = days[date.getDay()];
const month = months[date.getMonth()];
const currentDate = `${day}, ${dayOfMonth} ${month} ${year}`;


document.querySelector('#currentDate').innerHTML = currentDate;



    if (day == 'Friday') {
        document.querySelector('.banner').style.display = 'Block'; 
    }
