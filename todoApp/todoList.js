const fillup = (id) => {
    let obj = readById(id)
    inputList.map(input => {
        todoForm[input].value = obj[input]
    })
    editMode = true;
    myId = id
    $('delete').style.display='inline-block'

    openAdder()
}

const todoList = () => {
    let mystyle = {
        padding: '20px',
        margin: '15px',
    }
    let btnStyle = {
        float: 'right'
    }
    if (getStore()) {
        let todoHtml = ''
        let todoArr = getStore();
        todoArr.map(data => {
            if (data.day === today()) {
                todoHtml += `<div title='${data.how}\n${data.why}\n\n${data.time}' class='hover-shadow' style=${style(mystyle)}>
        ${data.what} 
        <button title='veiw, edit, delete and more' style=${style(btnStyle)} onclick="fillup(${data.id})" >preveiw</button>    
        </div>`
            }
        })
        $('todoList').innerHTML = todoHtml
    } else {
        $('todoList').innerHTML = 'add something'

    }
}
todoList()