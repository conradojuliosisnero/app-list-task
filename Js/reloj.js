const relojContend = document.querySelector('.reloj');
const calendarioContend = document.querySelector('.calendario');

const reloj = new Date();

let dayWeek = 
        ['Monday','Tuesday','Wednesday',
        'Thursday','Friday','Saturday','Sunday']

let monthYear = 
        ['January','February','March','April',
        'May','June','July','August',
        'September','October','November','December'];

calendarioContend.innerHTML = 
`<div class="calendario">
<div class="day">${dayWeek[reloj.getDay()]}<p>day</p></div>
<div class="month">${monthYear[reloj.getMonth()]}<p>month</p></div>
<div class="year">${reloj.getFullYear()}<p>year</p></div>
</div>`

setInterval(()=>{
    let am = 'AM';
    let pm = 'PM';
    let horaLocal = new Date();
    let segundos =horaLocal.getSeconds();
    let minutos = horaLocal.getMinutes();
    let horas = horaLocal.getHours();
    if (horas >= 12) {
        relojContend.innerHTML = 
    `<div class="seconds">${segundos} s<p>seconds</p></div>
    <div class="minutes">${minutos} m<p>minutes</p></div>
    <div class="hours">${horas} ${pm}<p>hours</p></div>`;
    }else{
        relojContend.innerHTML = 
    `<div class="seconds">${segundos} s<p>seconds</p></div>
    <div class="minutes">${minutos} m<p>minutes</p></div>
    <div class="hours">${horas} ${am}<p>hours</p></div>`;
    }
},1000)