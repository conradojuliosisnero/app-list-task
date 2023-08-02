    // ELEMENTOS    
const input = document.querySelector(".input");
const button = document.querySelector(".btn__task");
const list = document.querySelector(".list__task");
const tasks = document.querySelector(".task");
const leyenda = document.querySelector(".leyend");
const btndelete = document.querySelector('.btn__detele-task');

    // funcion AGREGAR TAREAS 

    // function addTask() {
    //     // let li = document.createElement('li')
    //     // li.appendChild(document.createTextNode(input.value))
    //     // console.log(input.value)
    //     // task.appendChild(li)

    //     // Capturamos el valor del input
    //     let inputValue = input.value;
    //     console.log(inputValue)
    //     // creamos un nuevo elemento li
    //     const newElement = document.createElement('li');
        
    //     // newElement.textContent = inputValue.textContent;
    // }

    //  funcion SELECCIONAR ELEMENTOS 
    function select() {
       tasks.classList.toggle('select');
       tasks.classList.toggle('completed')
    }

    // funcion BORRAR TAREA
    function deteleTask() {
        tasks.remove();
    }

    // listeners     
    tasks.addEventListener('click',select);
    btndelete.addEventListener('click',deteleTask);

    // button.addEventListener('click',addTask)