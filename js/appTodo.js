// Create UI Object
const ui = new UItodo();

//Todo
const addTodoButton = document.getElementById("addTodo");
const todoModal = new bootstrap.Modal(document.getElementById("todoModal"), {});
const modalTitle = document.querySelector(".modal-title");
const modalButton = document.querySelector(".modalButton");
const typeElement = document.querySelector("#type");
const taskElement = document.querySelector("#task");
const priorityElement = document.querySelector("#priority");
const deleteTodoButton = document.querySelector(".delete-todo");
const editTodoButton = document.querySelector(".edit-todo");
const todosButton = document.querySelector("#todoButton");
let editParent;

// Add All Events
eventListeners();
function eventListeners() {
  //Add Todo Button Event
  addTodoButton.addEventListener("click", () => {
    openTodoModal("Add Todo", "Add");
  });
  // Modal Button Event
  modalButton.addEventListener("click", () => {
    if (modalButton.innerHTML == "Add") {
      addTodo();
    } else {
      editTodo();
    }
  });
  //Delete todo botton event
  deleteTodoButton.addEventListener("click", deleteTodo);
  editTodoButton.addEventListener("click", openEditTodoModal);
  todosButton.addEventListener("click", hideMovie);
  const checkButton = document.querySelectorAll(".change-icon");
  checkButton.forEach((element) => element.addEventListener("click", deleteTodo));
}
function hideMovie() {
  console.log("Todos");
  const movieElemet = document.querySelector("#movieElement");
  const todoElemet = document.querySelector("#todoElement");
  movieElemet.style.display = "none";
  todoElemet.style.display = "block";
}
function editTodo() {
  const newTodo = getNewTodo();
  if (newTodo !== false) {
    ui.editTodo(editParent, newTodo);
    closeTodoModal();
    ui.clearTodoInputs(typeElement, taskElement, priorityElement);
    ui.displayMessages("Task successfully changed", "success", ".todos-header");
  }
}
function openEditTodoModal(e) {
  const editElement = e.target;
  editParent = editElement.closest(".todo");
  let task = editParent.querySelector(".task").textContent;
  let type = editParent.querySelector(".type").textContent;
  let priority = editParent.querySelector(".priority").textContent;
  const oldTodo = new Todo(type, task, priority);
  ui.changeTodoInputs(oldTodo);
  openTodoModal("Edit Todo", "Save Changes");
}
function deleteTodo(e) {
  const deleteElement = e.target;
  var parent = deleteElement.closest(".todo");
  parent.remove();
}
function addTodo() {
  const newTodo = getNewTodo();
  if (newTodo !== false) {
    ui.addTodoToUI(newTodo);
    closeTodoModal();
    ui.clearTodoInputs(typeElement, taskElement, priorityElement);
    ui.displayMessages("Task successfully added", "success", ".todos-header");
    addEventToAllNewElements();
  }
}
function getNewTodo() {
  const type = typeElement.value;
  const task = taskElement.value;
  const priority = priorityElement.value;
  if (type === "" || task === "" || priority === "Select priority") {
    //Error Message
    ui.displayMessages("All fields must be filled", "danger", ".modal-body");
    return false;
  } else {
    //Create new todo object
    const newTodo = new Todo(type, task, priority);
    return newTodo;
  }
}
function addEventToAllNewElements() {
  const allDeleteTodoButton = document.querySelectorAll(".delete-todo");
  allDeleteTodoButton.forEach((element) => element.addEventListener("click", deleteTodo));

  const allEditTodoButton = document.querySelectorAll(".edit-todo");
  allEditTodoButton.forEach((element) => element.addEventListener("click", openEditTodoModal));

  const checkButton = document.querySelectorAll(".change-icon");
  checkButton.forEach((element) => element.addEventListener("click", deleteTodo));
}
function openTodoModal(titleText, buttonText) {
  modalTitle.innerHTML = titleText;
  modalButton.innerHTML = buttonText;
  todoModal.show();
}
function closeTodoModal() {
  todoModal.hide();
}
