const local = localStorage;
//day
let thisDay = undefined;
let editMode = false;
let myId = undefined
const store = 'store';

const setStore = (b) => {
    return localStorage.setItem(store, JSON.stringify(b))
}
const getStore = () => {
    return JSON.parse(localStorage.getItem(store))
}

const today = () => {
        let day = (new Date).getDay();
        let dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
        return thisDay ? thisDay : dayArr[day]
    }
    //list of input id
inputList = ['what', 'how', 'why', 'time', 'duration']
    //validation
const inputScheme = () => {
    let score = 0
    inputList.map(input => {
        todoForm[input].value.length < 3 && todoForm[input].name !== 'range' ?
            alert(`the ${input} you inputed must not be less than 3 characters`) : score++
    })
    return score
}

const save = () => {
    closeAdder()
        inputScheme() === inputList.length ?
            saveFunction(assignValue()) : alert('please fillout all')
    }
    //saving data
const assignValue = () => {
    let obj = {}
    inputList.map(input => obj[input] = todoForm[input].value)
    if (editMode === false) {
        obj = { id: randomId(), completed: false, day: today(), ...obj }
        return obj
    } else {
        editById(myId, obj)
        editMode = false
        todoList()

    }
}
const saveFunction = (todObj) => {
    if (todObj) {
        let list = [];
        if (getStore()) {
            list = getStore();
            list.push(todObj)
            setStore(list)
        } else {
            list.push(todObj)
            setStore(list)
        }
        todoList()
    }
}
console.log(getStore())