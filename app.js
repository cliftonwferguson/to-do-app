

let toDos = [];

function onReady() {

  let id = 0;
  const addToDoForm = document.getElementByid('addToDoForm');
  const newToDoText = document.getElementByid('newToDoText');
  const toDolist = document.getElementByid('toDoList');
  function createNewToDo() {
    if (!newTodotext.value) {return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id+;
      });
      newToDoText.value = "";

    }
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';

  });
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    }
    toDo.forEach(function(toDo) {
      const newToDo = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      newToDo.textcontent = toDo.title;
      newToDoText.appendChild(newToDo);
      newToDoText.appendChild(checkbox);
      newToDo.appendChild(deleteButton);
      deleteButton.addEventListener('click', () => {
          myFunction(newLi);

    });
renderTheUI();
}





window.onload = function () {
    alert("The window has loaded!");
    onReady();
};

function myFunction(li) {
   let ul = document.getElementsByTagName("ul")[0];
    ul.removeChild(li);
}
