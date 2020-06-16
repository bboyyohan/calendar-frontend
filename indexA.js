

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

let currentMonth = () => currentDate.getMonth() // whenever you get currentMonth, it will always be 5,
                                                // but if u make it into a fn it does it everytime we 
                                                // call it instead of retrieving the same number 5, always checks what current date it
let currentYear = () => currentDate.getFullYear()

document.addEventListener("DOMContentLoaded", () => {
    renderCalendar(currentMonth(), currentYear()) //invoking because its a fn not a variable due to line 35 + 38
    // debugger
    let leftArr = document.querySelector(".prev")
    leftArr.addEventListener("click", (e) => {

        if (currentMonth() > 0) {
            // debugger

        currentDate.setMonth(currentDate.getMonth() - 1)
        renderCalendar(currentMonth(), currentYear())
        } else {
            // debugger
            currentDate.setMonth(currentDate.getMonth() - 1)
            // currentDate.setFullYear(currentDate.getFullYear() - 1 ) 
            // ^ reason why i dont need this is because currentDate is smart enough to change it for me
            renderCalendar(currentMonth(), currentYear())

        }
    })
    let rightArr = document.querySelector(".next")
    rightArr.addEventListener("click", (e) => {

        currentDate.setMonth(currentDate.getMonth() + 1)
        renderCalendar(currentMonth(), currentYear())
      
    })
})


function renderCalendar(m, y) {

    currentDate.setDate(1)

    // debugger
    let month = document.getElementById("month")
    let monthText = document.getElementById("month-name")
    let year = document.getElementById("year")

    let daysBody = document.querySelector(".days")

    //

    const lastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDate()
    // new Date(year, month, day), day is 0 because it gets last day of previous month, that's why we add 1 to current month
    

    const prevMonthLastDay = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
    ).getDate()
    
    const firstDay = currentDate.getDay() //0-6, Sun-Sat, index of first day of month

    
    const lastDayIndex = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        0
    ).getDay()

    console.log(lastDayIndex)
    
    const nextDays = 7 - lastDayIndex - 1


    let days = ""
    // ^ gets rid of all the days

    for (let x = firstDay; x > 0; x--) {
      days += `<li class="prev-date">${prevMonthLastDay - x + 1}</li>`
        // debugger
        // let previousMonthDates = document.createElement("li")
        // previousMonthDates.innerHTML = `${prevMonthLastDay - x + 1}`

    }
  
    for (let i = 1; i <= lastDay; i++) {
        days += `<li>${i}</li>`
    }
  
    for (let j = 1; j <= nextDays; j++) {
      days += `<li class="next-date">${j}</li>`
      daysBody.innerHTML = days
    }
  
    //

    monthText.innerHTML = months[currentDate.getMonth()]
    year.innerText = currentYear()

 
}

