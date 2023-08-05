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
const menu = document.getElementById('header');
const relContend = document.querySelector('.contenedor__reloj');
const menuLetters = document.querySelectorAll('.item__list');
const leyenda = document.querySelectorAll('.leyendas');

let eventoOcurrio = false;

function changeMent() {
    dia.style.transition = ".5s";
    mes.style.transition = ".5s";
    anio.style.transition = ".5s";
    botonTareas.style.transition = ".5s";
    menu.style.background = ".5s";
    relContend.style.background = "#5df9b0";
    botonTareas.style.background = "#5df9b0";
    menu.style.background = "#5df9b0";
	dia.style.color = "#ffffff";
    mes.style.color = "#ffffff";
    anio.style.color = "#ffffff";
    menuLetters.forEach((letras)=>{
        letras.style.color = "#000000"
    })
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
    menu.style.background = ".5s";
    relContend.style.background = "#0ea0da";
    menu.style.background = "#0ea0da";
	dia.style.color = "#ffffff";
    mes.style.color = "#ffffff";
    anio.style.color = "#ffffff";
    botonTareas.style.transition = ".5s";
    botonTareas.style.background = "#0ea0da";
    menuLetters.forEach((letras)=>{
        letras.style.color = "#000000"
    })
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
    menu.style.background = ".5s";
    relContend.style.background = "#c9cf1c";
    menu.style.background = "#c9cf1c";
    botonTareas.style.background = "#c9cf1c";
	dia.style.color = "#ffffff";
    mes.style.color = "#ffffff";
    anio.style.color = "#ffffff";
    color3.classList.toggle('click');
    menuLetters.forEach((letras)=>{
        letras.style.color = "#000000"
    })
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
    menu.style.background = "#930cd6";
    relContend.style.background = "#930cd6";
    botonTareas.style.background = "#930cd6";
    botonTareas.style.background = "#930cd6";
	dia.style.color = "#ffffff";
    mes.style.color = "#ffffff";
    anio.style.color = "#ffffff";
    color4.classList.toggle('click');
        menuLetters.forEach((letras)=>{
            letras.style.color = "#ffffff"
        })
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

color1.addEventListener("mouseover", changeMent);
color2.addEventListener("mouseover", changeBlue);
color3.addEventListener("mouseover", changeYelow);
color4.addEventListener("mouseover", changePurple);
