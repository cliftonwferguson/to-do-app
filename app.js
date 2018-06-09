
function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  renderTheUI();

}

function createNewToDo() {
  if (!newToDoText.value) {return; }
  toDos.push({
    title: newToDoText.value,
    complete: false
  });
  renderTheUI();
}
  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
     toDoList.textContent = '';
      toDos.forEach(function(toDo) {
        const newToDo = document.createElement('li');
        const checkbox = document.createElement('input');
          checkbox.type = "checkbox";
      newToDo.textContent = toDo.title;
      toDoList.appendchild(newToDo);
      newToDo.appendChild(checkbox);
    });
  }

 addTodoForm.addEventListener('submit', event => {
   event.preventDefault();
   createNewToDo();
   newToDoText.value = "";
 });

  renderTheUI(); {

  };

window.onload = function () {
  console.log('hello');
    alert("The window has loaded!");
    onReady();

};
