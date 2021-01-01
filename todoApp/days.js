let dayArr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const boxShadow = ' 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12)'

let myDay = () => {
    let myday = (new Date).getDay()
    $(myday).style.boxShadow = boxShadow
}
let html = ''

const daySwitcher = (el) => {
    for (let i = 0; i < 7; i++) {
        if (el.id !== i) {
            $(i).style.boxShadow = boxShadow

        }
    }
    el.style.boxShadow = 'none'


    thisDay = el.innerText
    todoList()
}

dayArr.map((day, index) => {
    html += `<div id=${index} onclick='daySwitcher(this)'>${day}</div>`
})

$('days').innerHTML = html
myDay()