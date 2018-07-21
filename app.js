let id = 0;

function onReady() {
    let toDos = [];
    const addToDoForm = document.getElementById('addToDoForm');
    const newToDoText = document.getElementById('newToDoText');
    const toDoList = document.getElementById('toDoList');

    renderTheUI();

    function deleteTodos(id) {
      return toDos.filter(todo => todo.id !== id);
        }


    function createNewToDo() {
        if (!newToDoText.value) {
            return;
        }


        toDos.push({
            title: newToDoText.value,
            complete: false,
            id: id++
        });
        newToDoText.value = '';
        renderTheUI();
    }

    function renderTheUI() {
        const toDoList = document.getElementById('toDoList');
        toDoList.textContent = '';
        toDos.forEach(function(toDo) {
            const newToDo = document.createElement('li');
            const checkbox = document.createElement('input');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = "deleteToDo";
            checkbox.type = "checkbox";
            newToDo.textContent = toDo.title;
            newToDo.id = toDo.id;
            toDoList.appendChild(newToDo);
            newToDo.appendChild(checkbox);
            newToDo.appendChild(deleteButton);
            deleteButton.addEventListener('click', () => {
                toDos = deleteTodos(toDo.id);
             renderTheUI();
            })

        });

        }
    addToDoForm.addEventListener('submit', event => {
        console.log("1hello");
        event.preventDefault();
        createNewToDo();
        newToDoText.value = "";
    })
}


window.onload = function() {
    console.log('hello');
    alert("The window has loaded!");
    onReady();
}
