const todoData = document.querySelector('.form-data');
const ulPlaceHolder = document.querySelector('.my-todo')

const updateDOM = (data)=>{
    let insideHTML = ``;
    Object.keys(data).forEach(value => {
        const todo = data[value];
        const html = `<li><p>${todo.title}</p><button type="button">X</button></li>`
        insideHTML += html
    });
    ulPlaceHolder.innerHTML = insideHTML;
}

const sendGETDataRequestForTodos = () => {
    fetch('http://localhost:3000/todos',{
        method:"GET",
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(data => data.json())
    .then(data => {
        updateDOM(data);
    })
    .catch(err => console.error(err))
}

document.addEventListener('DOMContentLoaded',sendGETDataRequestForTodos);

todoData.addEventListener('submit',(event)=>{
    event.preventDefault();
    const todo = {
        "title":todoData.elements.title.value,
        "description":todoData.elements.description.value
    }

    fetch('http://localhost:3000/postTodos',
    {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(todo)
    })
    .then(data => data.json())
    .then(data => {
        updateDOM(data);
    })
    .catch(err => console.error(err))
})