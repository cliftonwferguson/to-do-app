function onReady() {
   const addToDoForm = document.getElementById('addToDoForm');
   const newToDoText = document.getElementById('newToDoText');
   const toDoList = document.getElementById('toDoList');
   addToDoForm.addEventListener();
   addToDoForm.addEventListener('submit', () => {
   event.preventDefault();
   let title = newToDoText.value;
   let newLi = document.createElement('li');
   let checkbox = document.createElement('input');
   checkbox.type = "checkbox";
   newLi.textContent = title;
   newLi.appendChild(checkbox);
   toDoList.appendChild(newLi);
   newToDoText.value = '';
   var btn = document.createElement("button")
   function myFunction() {
     Var btn = document.createElement("button");
       document.body.appendChild(btn);
     }
   }
     });
}

window.onload = function() {
   alert("The window has loaded!");
   onReady();
 };
