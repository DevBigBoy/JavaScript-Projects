//* Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

//* Emty Array To Store Tasks
let arrayOfTasks = [];

//* Event Listeners
todoButton.addEventListener("click", addtTodo);
todoList.addEventListener("click", deleteCheck);

//* Functions
function addtTodo(event) {
  //! Prevent form from submitting
  event.preventDefault();

  //! check the input value
  if (todoInput.value !== "") {
    //! Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //! Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.append(newTodo);

    //! check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    //! check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //!  Append to list
    todoList.appendChild(todoDiv);

    //! Clear Todoinput Value
    todoInput.value = "";
  }
}

//* delete
function deleteCheck(e) {
  const item = e.target;
  console.log(item.classList);
  //*  Delete Todo
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  //* Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
