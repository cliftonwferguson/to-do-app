
function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementByiD('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDolist = document.getElementById('toDoList');
  function createNewToDo() {
    if (!newTodotext.value) {return; }
    toDos.push({
      title: newToDoText.value,
      complete: false
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
      toDoList.appendChild(newToDo);
      newToDo.appendChild(checkbox);

    });
renderTheUI();
}




function myFunction(li) {
   let ul = document.getElementsByTagName("ul")[0];
    ul.removeChild(li);
}
window.onload = function () {
    alert("The window has loaded!");
    onReady();
};
