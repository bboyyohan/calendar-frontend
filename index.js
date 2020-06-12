const BASE_URL = "http://localhost:3000"
const USERS_URL = `${BASE_URL}/users`
const TASKS_URL = `${BASE_URL}/tasks`


// document.addEventListener("DOMContentLoaded", () => {
//     getUser()
// })

// function getUser() {
//     fetch(USERS_URL)
//     .then(res => res.json())
//     .then(UserArr => {
//         UserArr.forEach(user => renderUser(user))
//     })
// }

// function renderUser(user) {
//     // debugger
//     let main = document.getElementById("main-body")
//     let div = document.createElement("div")
//     div.innerText = user.name
//     main.append(div)
//     // console.log(user)
// }

//above code just to test 

document.addEventListener("DOMContentLoaded", () => {
    getUser()
})

function getUser() {
    fetch(USERS_URL)
    .then(res => res.json())
    .then(UserArr => {
        UserArr.forEach(user => renderUser(user))
    })
}

