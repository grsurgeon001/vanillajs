const todosForm = document.querySelector(".todos-form");
const todosInput = document.querySelector(".todos-input");


console.log(todosForm);

let todolist = [];
console.log(todolist);

function reloadTodo(){
    const saved_todos = JSON.parse(localStorage.getItem("todos"));
    saved_todos.forEach(element => {
        todolist.push(element);
    });
    console.log("updated",todolist);
}

function saveNewTodo(event){
    event.preventDefault();
    const new_todo = todosInput.value;
    todolist.push(new_todo);
    localStorage.setItem("todos",JSON.stringify(todolist));
}

reloadTodo();
todosForm.addEventListener("submit",saveNewTodo);