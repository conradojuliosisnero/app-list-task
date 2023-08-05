// ELEMENTOS
const input = document.querySelector(".input");
const button = document.querySelector(".btn__task");
const list = document.querySelector(".list__task");
const taskCompleted = document.querySelector(".list__task__completed");
// const tasks = document.querySelectorAll(".task");
const leyenda = document.querySelector(".leyend");
// const texto = document.querySelector(".texto");

//variables
let idCounter = 0;

// funcion AGREGAR TAREA
function addTask() {
    if (input.value !== "") {
        idCounter++;
        let Input = input.value;
        list.innerHTML += `<li class="task" id="task${idCounter}">
                <p>${Input}</p>
                <button class="detele-task active" id="detele-task${idCounter}">X</button>
            </li>`;
        input.value = "";

        // Save task to localStorage
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        if(tasks === null){
            tasks = [];
        }
        tasks.push({id: `task${idCounter}`, content: Input});
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

button.addEventListener("click", addTask);

// funcion BORRAR TAREA
function deteleTask(id) {
    // Eliminamos la tarea del DOM
    let taskRemove = document.getElementById(id);
    taskRemove.remove();
    // Obtener las tareas del almacenamiento local
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Eliminar la tarea del almacenamiento local
    tasks = tasks.filter(task => task.id !== id);

    // Actualizar las tareas en el almacenamietno local
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


list.addEventListener('click',(event)=>{
    if (event.target.className === 'detele-task active') {
        const id = event.target.id.replace('detele-task','task');
        deteleTask(id);
    } else if (event.target.nodeName === 'P' || event.target.nodeName === 'LI'){
        selection(event.target.closest('.task'));
    }
})

//  funcion SELECCIONAR ELEMENTOS
function selection(task) {
    task.classList.toggle("select");
    task.classList.toggle("completed");
    if (task.classList.contains('select')) {
        taskCompleted.innerHTML += `<li class="task completed select" id="${task.id}">
            <p>${task.querySelector('p').textContent}</p>
            <button class="detele-task active" id="detele-task${task.id.replace('task', '')}">X</button>
        </li>`;
    } else {
        let tarea = document.getElementById(task.id);
        if (tarea) {
            tarea.remove();
        }
    }
}

// menu RESPONSIVE
const colores = document.querySelector('.item__list');
const addtaskMenu = document.querySelector('.dos');
const divColors = document.querySelector('.colors__change');
const contenedortask = document.querySelector('.contenedor__task');

colores.addEventListener('click',()=>{
    divColors.classList.toggle('visible');
})

addtaskMenu.addEventListener('click',()=>{
    contenedortask.classList.toggle('addtask__visible');
})


// Event to load task
document.addEventListener('DOMContentLoaded', (event) =>{
    //Se cargan las tareas del LocalStorage
   let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

   // Bucle para cada una de las tareas
   for(let task of tasks){
    //Se incrementa el contador en uno
    idCounter++;
    // Se crea una nueva tarea en el DOM y se añade a list
    list.innerHTML += `<li class="task" id="task${idCounter}">
            <p>${task.content}</p>
            <button class="detele-task active" id="detele-task${idCounter}">X</button>
        </li>`;
   }
});