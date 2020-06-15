const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const TASKS_URL = `${BASE_URL}/tasks`

addEventListener("DOMContentLoaded", function (){

})

function addTask() {
    let addTaskButton = document.querySelector(".add-task")
    addTaskButton.addEventListener("submit", function() {
        handleSubmit (e, id)
    }) 
    //create a form with JS
    // form tag and class
    const form = document.createElement("Form")
    form.className = "task-form"
    //input-title 
    const titleInput = document.createElement("input")
    titleInput.setAttribute("id", "title-input")
    titleInput.setAttribute("type", "text")
    titleInput.setAttribute("placeholder", "title")
    //input-date
    const dateInput = document.createElement("input")
    dateInput.setAttribute("id", "date-input")
    dateInput.setAttribute("type", "date")
    dateInput.setAttribute("placeholder", "date")
    //input-startTime
    const startTimeInput = document.createElement("input")
    startTimeInput.setAttribute("id", "start-time-input")
    startTimeInput.setAttribute("type", "time")
    startTimeInput.setAttribute("placeholder", "start-time")
    //input-endtime
    const endTimeInput = document.createElement("input")
    endTimeInput.setAttribute("id", "end-time-input")
    endTimeInput.setAttribute("type", "time")
    endTimeInput.setAttribute("placeholder", "end-time")
    //input-description
    const descriptionInput = document.createElement("input")
    descriptionInput.setAttribute("id", "description-input")
    descriptionInput.setAttribute("type", "text")
    descriptionInput.setAttribute("placeholder", "description")
    //input-completion
    const completionInput = document.createElement("input")
    completionInput.setAttribute("id", "completion-input")
    completionInput.setAttribute("type", "text")
    completionInput.setAttribute("placeholder", "completion")

    //input-userID    
    const userIDInput = document.createElement("input")
    userIDInput.setAttribute("id", "userID-input")
    userIDInput.setAttribute("type", "number")
    userIDInput.setAttribute("placeholder", "userID")
    
    //input-submit
    let submitInput = document.createElement("input")
    submitInput.setAttribute("id", "submit-input")
    submitInput.setAttribute("type", "submit")
    submitInput.setAttribute("value", "Save")
    
    //append to the form
    form.append(titleInput,dateInput,startTimeInput,endTimeInput,descriptionInput,completionInput,userIDInput)
    
    //calling a function
    form.addEventListener("submit", () => handleSubmit(e))
}

function handleSubmit(e){
    e.preventDefault()
        
    //declarnig each value of input 
    const title = document.getElementById("title-input").value
    const date = document.getElementById("date-input").value
    const startTime = document.getElementById("startTime-input").value
    const endTime = document.getElementById("endTime-input").value
    const description = document.getElementById("description-input").value
    const userID = document.getElementById("userID-input").value
      
    postTask(title, date, startTime, endTime, description, userID)
      }
      

    function postTask(title, date, startTime, endTime, description, userID){
        console.log(title, date, startTime, endTime, description, userID)
       
        fetch(TASKS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            title: title,
            date: date,
            startTime: startTime,
            endTime: endTime,
            description: description,
            userID: userID
          })
        }).then(res => res.json())
        .then(json => {console(json)})
      }

