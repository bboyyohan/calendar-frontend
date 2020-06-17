const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const TASKS_URL = `${BASE_URL}/tasks`



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
    renderLogin();
    
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
    document.querySelector("#task").addEventListener("click", renderForm)

})


function renderLogin(){
    const login = document.getElementById("login")
    const loginForm = document.createElement("form")
    loginForm.className= "login-form"
    document.body.appendChild(loginForm)

    let input = document.createElement("input")
    input.setAttribute("type", "text")
    input.setAttribute("placeholder", "email")
    loginForm.appendChild(input)
    
    document.getElementById("login").addEventListener("click", (e) => {
        getUser(e)})
}

function getUser(e) {
    let email = document.querySelector("input").value
    
    
    fetch(USERS_URL)
    .then(res => res.json())
    .then(userArr => {
        // if matches
        let theUser = userArr.filter(user => {
            return user.email === email
        })
        renderUser(theUser)
            //then render the logined user's calender
            // renderCalender(loggined user id)
    }) 
}

function renderUser(user) {
    debugger
    console.log(user[0].email)

    // cat.hobbies.forEach(hobby => {
    //     let content = catDiv.querySelector(".extra.content")
    //     let li = document.createElement("li")
    //     li.innerText = hobby.name
    //     // debugger
    //     content.append(li)
    //   })
    // invokes renderTask(id)
}

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
        // days.append(previousMonthDates)

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

    var daysCollection = document.querySelector("ul.days").children
    daysCollection = Array.from(daysCollection)
    var arr = daysCollection.map(li => li.setAttribute("id", li.innerText))
 
}


function renderForm() {
    console.log("renderForm")

    //create a form with JS
    // form tag and class
    const form = document.createElement("Form")
    form.className = "task-form"

    //input-title 
    const titleInput = document.createElement("input")
    titleInput.setAttribute("id", "title-input")
    titleInput.setAttribute("type", "text")
    titleInput.setAttribute("name", "title")
    titleInput.setAttribute("placeholder", "Title")

    //input-date
    const dateInput = document.createElement("input")
    dateInput.setAttribute("id", "date-input")
    dateInput.setAttribute("type", "date")
    //input-startTime
    const startTimeInput = document.createElement("input")
    startTimeInput.setAttribute("id", "start-time-input")
    startTimeInput.setAttribute("type", "time")
    //input-endtime
    const endTimeInput = document.createElement("input")
    endTimeInput.setAttribute("id", "end-time-input")
    endTimeInput.setAttribute("type", "time")
    //input-description
    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute("id", "description-input")
    descriptionInput.setAttribute("type", "text")
    descriptionInput.setAttribute("placeholder", "Description")

    //input-completion
    const completionInput = document.createElement("input")
    completionInput.setAttribute("id", "completion-input")
    completionInput.setAttribute("type", "text")
    completionInput.setAttribute("placeholder", "completion")
    
    //input-submit
    let submitInput = document.createElement("input")
    submitInput.setAttribute("id", "submit-input")
    submitInput.setAttribute("type", "submit")
    submitInput.setAttribute("value", "Save")

    //append to the form
    document.body.appendChild(form)
    form.append(titleInput, dateInput, startTimeInput, endTimeInput, descriptionInput, completionInput, submitInput)
    
    //calling an submit event
    form.addEventListener("submit", (e) => {
        handleSubmit(e)
    })
}

function handleSubmit(e){    
    e.preventDefault()
    
    //declarnig each value of input 
    const title = document.getElementById("title-input").value
    const date = document.getElementById("date-input").value
    const startTime = document.getElementById("start-time-input").value
    const endTime = document.getElementById("end-time-input").value
    const description = document.getElementById("description-input").value
    const completion = document.getElementById("completion-input").value
      
    postTask(title, date, startTime, endTime, description, completion)
    }
      

function postTask(title, date, startTime, endTime, description, completion) {

    fetch(TASKS_URL, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
          },
        body: JSON.stringify({
        title: title,
        date: date,
        start_time: startTime,
        end_time: endTime,
        description: description,
        completion: completion,
        user_id: 5
        //^ hard-coded user_id for now.. replace it with logged-in user's id
        })
        }).then(res => res.json())
        .then( json => {
            console.log(json)
        })
}





