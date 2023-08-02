const input = document.querySelector('.input');
const button = document.querySelector('.btn__task');
const list = document.querySelector('.list__task');
const task = document.querySelector('task');


    function addTask() {
        // let li = document.createElement('li')
        // li.appendChild(document.createTextNode(input.value))
        // console.log(input.value)
        // task.appendChild(li)

        // Capturamos el valor del input
        let inputValue = input.value;
        console.log(inputValue)
        // creamos un nuevo elemento li
        const newElement = document.createElement('li');
        
        // newElement.textContent = inputValue.textContent;
    }

    function pressEnter() {
    }

    button.addEventListener('click',addTask)
    input.addEventListener('keypress',pressEnter)
