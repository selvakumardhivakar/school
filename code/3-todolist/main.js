const createTodoButton = document.getElementById("create-todo");
const todoInput = document.getElementById("todo-input");
const todolist = document.getElementById("todo-list");

createTodoButton.addEventListener("click", () => {
  if (todoInput.value) {
    var li = document.createElement("li");
    li.id = todolist.children.length;
    li.appendChild(document.createTextNode(todoInput.value));
    todolist.appendChild(li);
    todoInput.value = "";
  }
});
