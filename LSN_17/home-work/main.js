const url = 'http://localhost:3000/data'

const inp = document.getElementById('input-task')
const addBtn = document.getElementById('add-btn')
const ulList = document.getElementById('todo-list')





// TODO POST
async function postData(obj) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(obj),
        });
        const result = await response.json()
        displeyTodoList(result)
        // console.log(result, 'ss');
        fetchData();


    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}

addBtn.addEventListener('click', () => {
    const obj = {
        value: inp.value
    }
    postData(obj)
})


//TODO GET
async function fetchData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displeyTodoList(data)
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}
fetchData();


 function displeyTodoList (data) {
    ulList.innerHTML = ''
    for(let i = 0; i < data.length; i++) {
        console.log(data[i]);
        const li = document.createElement('li')
        const span = document.createElement('span')
        const deleteBtn = document.createElement('button')
        const editBtn = document.createElement('button') 
        deleteBtn.innerText = 'delete'
        editBtn.innerText = 'edit'
        span.innerHTML= data[i].value
        li.appendChild(span)
        li.appendChild(deleteBtn)
        li.appendChild(editBtn)
        ulList.appendChild(li)
        deleteBtn.addEventListener('click',() => {
            deleteData(data[i].id)
        })
        editBtn.addEventListener('click',() => {
           
            patchData(patchData[i].id)
        })
    }    
}

//TODO delete
async function deleteData(id) {
    try {
        const response = await fetch(`${url}/${id}`, {method: 'DELETE'});
        if (response.status === 404) {
            console.log(response);
            throw new Error(response.status);
        }
        fetchData();
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}
// TODO PATCH
async function patchData(id) {
    try {
        const response = await fetch(`${url}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(patchObj),
        });
        const patchObj = {
            value: prompt('text')
        };   
        const result = await response.json();
        console.log(result);
    } catch (e) {
        console.log('Fetch data Error: ', e);
    }
}








