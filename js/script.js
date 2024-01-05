const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.querySelector("#search-input");
const eraseBtn = document.querySelector("#erase-button");
const filterBtn = document.querySelector("#filter-select");


const saveTodo = (text) => {
    // lógica da criação dos blocos de nomes de clientes, criando recursos HTML dentro do JS
    const todo = document.createElement("div")
    todo.classList.add("todo")

    const todoTitle = document.createElement("h3")
    todoTitle.innerText = text;
    todo.appendChild(todoTitle)

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todoList.appendChild(todo)

    todoInput.value = "" //faz com que depois q vc envia o nome do cliente, o input fique vazio
    todoInput.focus() //faz com q depois que vc envia o nome do cliente, continue selecionado o input
}


todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const inputValue = todoInput.value;

    if (inputValue) {
        saveTodo(inputValue)
    }
}) // a arrow function serviu para: nao permitir que coloquem algo nulo no formulario e tambem para validar nossos dados, dando um console.log em tudo que for digitado dentro do formulario

