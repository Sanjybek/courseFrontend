
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos');
xhr.onload = function () {
    if (xhr.status === 200) {
        // десериализация
        const todos = JSON.parse(xhr.responseText);
        // console.log(todos);
        // сериализация
        const jsonTodos = JSON.stringify(todos);

        localStorage.setItem('todos', jsonTodos);
    } else {
        console.log('Ошибка: ' + xhr.status);
    }
}


const todos = localStorage.getItem('todos');
if (!todos) xhr.send();
xhr.send();

// todo 
const todoList = JSON.parse(todos);
const ulList = document.getElementById('root');


for (let i = 0; i < todoList.length; i++) {
    const liTodo = document.createElement('li');
    liTodo.innerText = todoList[i].title;
    ulList.appendChild(liTodo);
}
const todoInput = document.getElementById('inp')
const inpValue = () => {
    if(newTitle.title === null) {
        const res =newTitle.title = todoInput.value
        `${liTodo.innerText = +res.title}`
    }
}
const newTitle = {
    id: '201',
    title: null,
    completed: false,
    userId: null,
}
// console.log(newTitle);
todoList.push(newTitle)
console.log(todoList);



