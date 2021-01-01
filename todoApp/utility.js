//used to change styleOBj to html element style
const style = (styleObj) => {
    let str = JSON.stringify(styleObj)
    let res = str.replace(/,/g, ';').replace(/}|{|"/g, '')
    return `${res}`
};
const $ = (el) => document.getElementById(el);
const uniqueId = 'random';

const setId = (b) => {
    return localStorage.setItem(uniqueId, b)
};

const getId = () => {
    return JSON.parse(localStorage.getItem(uniqueId))
};

const randomId = () => {
    getId() ? setId(getId() + 1) : setId(1)
    return getId()
};
const erase = () => localStorage.clear();
//for deletng a data from localStorage
const deleteById = (id) => {
    let deletableTodo = getStore();
    let modified = deletableTodo.filter(data => data.id != id)
    setStore(modified)
    todoList()
};
const editById = (id, newObj) => {
    let editable = getStore()
    for (i in editable) {
        if (editable[i].id == id) {
            editable[i] = { id: id, day: today(), completed: false, ...newObj }
            break
        }
    }
    setStore(editable)
    console.log(getStore())
};
//getById
const readById = (id) => {
    let readable = getStore();
    let writableData = readable.find(data => data.id === id)
    return writableData
};
//for editing a data from localStorage