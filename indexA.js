// const BASE_URL = "http://localhost:3000"
// const USERS_URL = `${BASE_URL}/users`
// const TASKS_URL = `${BASE_URL}/tasks`


// document.addEventListener("DomContentLoaded", () => {
//     renderCalendar()
// })

// function renderCalendar(){
//   let calendar = document.querySelector("#calendar")
//   let div = document.createElement("div")
//   div.innerText = "test"
//   calendar.append(div)
// }

const currentDate = new Date()


const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

const currentMonth = currentDate.getMonth()
const currentYear = currentDate.getFullYear()


document.addEventListener("DOMContentLoaded", () => {
    renderCalendar(currentMonth, currentYear)
})

function renderCalendar(m, y) {
    // debugger
    let month = document.getElementById("month")
    let monthText = document.getElementById("month-name")
    let year = document.getElementById("year")
    let leftArr = document.querySelector(".prev")
    let rightArr = document.querySelector(".next")

    // let nextMonth = month + 1
    // let previousMonth = month - 1 

    leftArr.addEventListener("click", e => {
        previousMonth(m ,y)
    })


    monthText.innerHTML = months[currentDate.getMonth()]

    year.innerText = y







}

function previousMonth(m, y) {
    // console.log(m,y)
    currentDate.setMonth(currentDate.getMonth() - 1)
    renderCalendar(m, y)
}