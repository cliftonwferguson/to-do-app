

let toDos = [];

function onReady() {

   console.log("ready");
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDolist = document.getElementById('toDoList');
  function createNewToDo() {
    if (!newToDoText.value) {return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++})
    newToDoText.value = "";

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';

  });
  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');
      const checkbox = document.createElement('input');
      const button = document.createElement('button');
      checkbox.type = 'check';
      button.onclick = fuction ();
      newToDo.textcontent = toDo.title;
      newToDoText.appendChild(newToDo);
      newToDoText.appendChild(checkbox);
      newToDo.appendChild(deleteButton);
      deleteButton.addEventListener('click', () => {
          myFunction(newLi);
       console.log("2ready");
    });
      renderTheUI();
})
}




window.onload = function () {
    alert("The window has loaded!");
    onReady();
};

function myFunction(li) {
   let ul = document.getElementsByTagName("ul")[0];
    ul.removeChild(li);
}
