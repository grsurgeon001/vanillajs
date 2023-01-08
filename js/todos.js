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

function paintTodo(new_todo,id){
    const li = document.createElement("li");
    li.setAttribute("id",id);
    const span = document.createElement("span");
    span.innerText = new_todo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    li.appendChild(span);
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
    paintTodo(new_todo,todos_item._id);
    todosInput.value = "";
}

function deleteToDo(event){
    const target_id = event.path[0].parentElement.id;
    const target_li = document.getElementById(`${target_id}`);
    todoList.removeChild(target_li);
    todolist = todolist.filter((todo) => todo._id !== parseInt(target_id));
    localStorage.setItem("todos",JSON.stringify(todolist));
    

}

reloadTodo();
todolist.forEach(element => {
    paintTodo(element.todo,element._id);
});
todosForm.addEventListener("submit",saveNewTodo);