function UItodo() {}
UItodo.prototype.displayMessages = function (message, type, place) {
  const cardBody = document.querySelector(place);

  //      <div class="alert alert-danger" role="alert">
  //          A simple danger alert—check it out!
  //      </div>

  const div = document.createElement("div");
  div.className = `alert alert-${type}`;
  div.textContent = message;
  cardBody.appendChild(div);

  setTimeout(function () {
    div.remove();
  }, 2000);
};
UItodo.prototype.addTodoToUI = function (newTodo) {
  const todos = document.getElementById("todos");
  todos.innerHTML += `
    <div class="col-lg-6 col-12 mt-4 todo">
        <div class="todo-card d-flex flex-column">
            <div class="mb-auto p-2 d-flex justify-content-between">
                <h5 class="text-start m-2 task">${newTodo.task}</h5>
                <div class="dropdown">
                    <button class="btn p-1" id="editTodo" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fas fa-ellipsis-h"></i>
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="editTodoButton">
                        <li>
                            <button class="dropdown-item edit-todo">Edit</button>
                        </li>
                        <li>
                            <button class="dropdown-item delete-todo">Delete</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="p-2 d-flex justify-content-between">
                <div>
                    <button class="btn btn-primary m-1 type">${newTodo.type}</button>
                    <button class="btn btn-secondary m-1 priority">${newTodo.priority}</button>
                </div>
                <div>
                    <span class="change-icon">
                        <i class="far fa-square"></i>
                        <i class="fas fa-check-square"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
`;
};
UItodo.prototype.clearTodoInputs = function (firstElement, secondElement, thirdElement) {
  firstElement.value = "";
  secondElement.value = "";
  thirdElement.options[0].selected = "selected";
};
UItodo.prototype.changeTodoInputs = function (todo) {
  console.log("here");
  document.querySelector("#task").value = todo.task;
  document.querySelector("#type").value = todo.type;
  document.querySelector("#priority").value = todo.priority;
};
UItodo.prototype.editTodo = function (editParent, newTodo) {
  editParent.querySelector(".task").textContent = newTodo.task;
  editParent.querySelector(".type").textContent = newTodo.type;
  editParent.querySelector(".priority").textContent = newTodo.priority;
};
