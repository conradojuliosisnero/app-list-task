const relojContend = document.querySelector(".reloj");
const calendarioContend = document.querySelector(".calendario");

const reloj = new Date();

let dayWeek = [
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
	"Sunday",
];

let monthYear = [
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
	"December",
];

const calendario = (calendarioContend.innerHTML = `<div class="calendario">
<div class="day">${dayWeek[reloj.getDate()]}<p>day</p></div>
<div class="month">${monthYear[reloj.getMonth()]}<p>month</p></div>
<div class="year">${reloj.getFullYear()}<p>year</p></div>
</div>`);

setInterval(() => {
	let am = "AM";
	let pm = "PM";
	let horaLocal = new Date();
	let segundos = horaLocal.getSeconds();
	let minutos = horaLocal.getMinutes();
	let horas = horaLocal.getHours();
	if (horas >= 12) {
		relojContend.innerHTML = `<div class="seconds">${segundos} s<p>seconds</p></div>
    <div class="minutes">${minutos} m<p>minutes</p></div>
    <div class="hours">${horas} ${pm}<p>hours</p></div>`;
	} else {
		relojContend.innerHTML = `<div class="seconds">${segundos} s<p>seconds</p></div>
    <div class="minutes">${minutos} m<p>minutes</p></div>
    <div class="hours">${horas} ${am}<p>hours</p></div>`;
	}
}, 1000);

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const color3 = document.querySelector(".color3");
const color4 = document.querySelector(".color4");
const dia = document.querySelector(".day");
const mes = document.querySelector(".month");
const anio = document.querySelector(".year");
const botonTareas = document.querySelector('.btn__task');

let eventoOcurrio = false;

function changeMent() {
    dia.style.transition = ".5s";
    mes.style.transition = ".5s";
    anio.style.transition = ".5s";
    botonTareas.style.transition = ".5s";
    botonTareas.style.background = "#5df9b0";
	dia.style.color = "#5df9b0";
    mes.style.color = "#5df9b0";
    anio.style.color = "#5df9b0";
    let eventoOcurrio = true;
    if (eventoOcurrio) {
        color1.classList.add('click');
        setInterval(()=>{
            color1.classList.remove('click');
        },700)
    }else{
        color1.classList.remove('click');
    }
}

function changeBlue() {
    dia.style.transition = ".5s";
    mes.style.transition = ".5s";
    anio.style.transition = ".5s";
	dia.style.color = "#0ea0da";
    mes.style.color = "#0ea0da";
    anio.style.color = "#0ea0da";
    botonTareas.style.transition = ".5s";
    botonTareas.style.background = "#0ea0da";
        let eventoOcurrio = true;
    if (eventoOcurrio) {
        color2.classList.add('click');
        setInterval(()=>{
            color2.classList.remove('click');
        },700)
    }else{
        color2.classList.remove('click');
    }
}

function changeYelow() {
    dia.style.transition = ".5s";
    mes.style.transition = ".5s";
    anio.style.transition = ".5s";
    botonTareas.style.transition = ".5s";
    botonTareas.style.background = "#c9cf1c";
	dia.style.color = "#c9cf1c";
    mes.style.color = "#c9cf1c";
    anio.style.color = "#c9cf1c";
    color3.classList.toggle('click');
    let eventoOcurrio = true;
    if (eventoOcurrio) {
        color3.classList.add('click');
        setInterval(()=>{
            color3.classList.remove('click');
        },700)
    }else{
        color3.classList.remove('click');
    }

}

function changePurple() {
    dia.style.transition = ".5s";
    mes.style.transition = ".5s";
    anio.style.transition = ".5s";
    botonTareas.style.transition = ".5s";
    botonTareas.style.background = "#930cd6";
	dia.style.color = "#930cd6";
    mes.style.color = "#930cd6";
    anio.style.color = "#930cd6";
    color4.classList.toggle('click');
    let eventoOcurrio = true;
    if (eventoOcurrio) {
        color4.classList.add('click');
        setInterval(()=>{
            color4.classList.remove('click');
        },700)
    }else{
        color4.classList.remove('click');
    }

}

color1.addEventListener("click", changeMent);
color2.addEventListener("click", changeBlue);
color3.addEventListener("click", changeYelow);
color4.addEventListener("click", changePurple);
