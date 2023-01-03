const todosForm = document.querySelector(".todos-form");
const todosInput = document.querySelector(".todos-input");
const todoList= document.querySelector(".todo-list__ul");


console.log(todosForm);

let todolist = [];

function reloadTodo(){
    const saved_todos = JSON.parse(localStorage.getItem("todos"));
    if (saved_todos){
        saved_todos.forEach(element => {
        todolist.push(element);
        });
    }
}

function paintTodo(new_todo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = new_todo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function saveNewTodo(event){
    event.preventDefault();
    const new_todo = todosInput.value;
    const todos_item = {
        "_id" : Date.now(),
        "todo" : new_todo,
    }
    todolist.push(todos_item);
    localStorage.setItem("todos",JSON.stringify(todolist));
    paintTodo(new_todo);
}

function deleteToDo(){

}

reloadTodo();
todolist.forEach(element => {
    paintTodo(element);
});
todosForm.addEventListener("submit",saveNewTodo);