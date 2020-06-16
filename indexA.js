const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const TASKS_URL = `${BASE_URL}/tasks`

addEventListener("DOMContentLoaded", function (){
    console.log("DOM is loaded")
    document.querySelector(".add-task").addEventListener("click", renderForm)

})

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





