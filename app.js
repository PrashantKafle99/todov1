let todoItem = [];

function loadTodos() {
    const storedTodos = localStorage.getItem('todotask');
    if (storedTodos) {
        todoItem = JSON.parse(storedTodos);
    }
    displayTODO();
}

function addTodo() {
    let textElement = document.querySelector('#todo-input');
    let todoTextValue = textElement.value;
    let dateElement = document.querySelector('#todo-date');
    let todoDateValue = dateElement.value;

    if (todoTextValue.trim() !== '' && todoDateValue !== '') {
        todoItem.push({
            items: todoTextValue,
            Date: todoDateValue,
        });
        localStorage.setItem('todotask', JSON.stringify(todoItem));
        displayTODO();
        textElement.value = '';
        dateElement.value = '';
    }
}

function displayTODO() {
    let todoHTML = document.querySelector('#todo-items');
    let newHtml = '';
    for (let i = 0; i < todoItem.length; i++) {
        newHtml += `
        <div class="todo-item">
            <span class="task">${todoItem[i].items}</span>
            <span class="date">${todoItem[i].Date}</span>
            <button class="delete-btn" onclick="deleteTodo(${i})">Delete</button>
        </div>
        `;
    }
    todoHTML.innerHTML = newHtml;
}

function deleteTodo(index) {
    todoItem.splice(index, 1);
    localStorage.setItem('todotask', JSON.stringify(todoItem));
    displayTODO();
}

window.onload = loadTodos;