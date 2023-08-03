// ELEMENTOS
const input = document.querySelector(".input");
const button = document.querySelector(".btn__task");
const list = document.querySelector(".list__task");
const taskCompleted = document.querySelector(".list__task__completed");
const tasks = document.querySelectorAll(".task");
const leyenda = document.querySelector(".leyend");
const btndelete = document.querySelector(".btn__detele-task");
const texto = document.querySelector(".texto");


//variables
let idCounter = 0;
idCounter++;
let valueInput = input.value;

// funcion AGREGAR TAREA
function addTask() {
    if (input.value !== "") {
        let Input = input.value;
        list.innerHTML += `<li class="task" id="${idCounter}">
                <p>${Input}</p>
                <button class="btn__detele-task active">X</button>
            </li>`;
        input.value = "";
    }
}


// funcion BORRAR TAREA
function deteleTask() {
    // if (btndelete.classList.contains('active')) {
        
    // }

}

tasks.forEach(()=>{
    btndelete.addEventListener('click',deteleTask);

})


//  funcion SELECCIONAR ELEMENTOS
// function selection() {
//     // agregamos estas clases
// 	tasks.classList.toggle("select");
// 	tasks.classList.toggle("completed");
//     if (tasks.classList.contains('select')) {
//         let tarea = taskCompleted.innerHTML +=
//         `<li class="task completed select" id="${idCounter}">
//             <p>${texto.textContent}</p>
//         </li>`;
//     }else{
//         tarea.remove()
//     }
// }
//iteremos sobre todas las tareas
// tasks.forEach( ()=>{
//     tasks.addEventListener("click", selection);
// })

// LISTENERS
button.addEventListener("click", addTask);
