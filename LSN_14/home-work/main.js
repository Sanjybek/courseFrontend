
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.onload = function () {
    if (xhr.status === 200) {
        const todos = JSON.parse(xhr.responseText);
        const jsonTodos = JSON.stringify(todos);
        localStorage.setItem('todos', jsonTodos);
    } else {
        console.log('Ошибка: ' + xhr.status);
    }
}
const todos = localStorage.getItem('todos');
if (!todos) xhr.send();
xhr.send();

const todoList = JSON.parse(todos);
const ulList = document.getElementById('root');


for (let i = 0; i < todoList.length; i++) {
    const liTodo = document.createElement('li');
    liTodo.innerText = todoList[i].title;
    ulList.appendChild(liTodo);
}

const todoInput = document.getElementById('inp');
const saveBtn = document.getElementById('saveBtn');


saveBtn.addEventListener('click', () => {
    const text = todoInput.value;
    if (text.trim() !== '') { 
        const todos = JSON.parse(localStorage.getItem('todos')) ;
        todos.push({
            userId: 1,
            id: todos.length + 1, 
            title: text,
            completed: false
        });
        
        const liTodo = document.createElement('li');
        liTodo.innerText = text;
        ulList.appendChild(liTodo);
        localStorage.setItem('todos', JSON.stringify(todos));
       
    }
});
