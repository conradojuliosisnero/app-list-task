// ELEMENTOS
const input = document.querySelector(".input");
const button = document.querySelector(".btn__task");
const list = document.querySelector(".list__task");
const taskCompleted = document.querySelector(".list__task__completed");
const tasks = document.querySelectorAll(".task");
const leyenda = document.querySelector(".leyend");
const texto = document.querySelector(".texto");

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
    }
}

button.addEventListener("click", addTask);

// funcion BORRAR TAREA
function deteleTask(id) {
    let taskRemove = document.getElementById(id);
    taskRemove.remove();
}

list.addEventListener('click',(event)=>{
    if (event.target.className === 'detele-task active') {
        const id = event.target.id.replace('detele-task','task');
        deteleTask(id);
    }
})


//  funcion SELECCIONAR ELEMENTOS
function selection() {
    // agregamos estas clases
	tasks.classList.toggle("select");
	tasks.classList.toggle("completed");
    if (tasks.classList.contains('select')) {
        let tarea = taskCompleted.innerHTML +=
        `<li class="task completed select" id="${idCounter}">
            <p>${texto.textContent}</p>
        </li>`;
    }else{
        tarea.remove()
    }
}


