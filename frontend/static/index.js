import Dashboard from "./views/Dashboard.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

// const router = async () => {
//     const routes = [
//         { path: "/", view: Dashboard },
//         // { path: "/reminder", view: () => console.log("Viewing Reminder")},
//         // { path: "/pet", view: () => console.log("Viewing pet")}
//         // { path: "/", view: () => console.log("Viewing Dashboard")}
//     ];

//     const possibleMatch = routes.map(route => {
//         return {
//             route: route,
//             isMatch: location.pathname === route.path
//         };
//     });

//         let match = possibleMatch.find(possibleMatches => possibleMatches.isMatch);

//         if (!match) {
//             match = {
//                 route: routes[0],
//                 isMatch: true
//             }
//         }
//         const view = new match.route.view();

//         document.querySelector("#app").innerHTML = await view.getHtml();
//         console.log(match.route.view());
// };

// window.addEventListener("popstate", router);

// document.addEventListener("DOMContentLoaded", () => {

//     document.body.addEventListener("click", e => {
//         if (e.target.matches("[data-link")) {
//             e.preventDefault();
//             navigateTo(e.target.href);
//         }
//     })

//     router();
// });


//store a todo

//when task is done

function completeTodo(element) {
    element.classList.toggle(Check);
    element.classList.toggle(Uncheck);
    element.parentNode.querySelector(".text").classList.toggle(LineThru);
    LIST[element.id].done = LIST[element.id].done ? false : true; 
}

// add to list

const list = document.getElementById("list");

const dateElement = document.getElementById("date");
const input = document.getElementById("input");

const Uncheck ="fa-check-circle";
const Check = "fa-circle-thin";
const LineThru = "lineThrough";

//variable
let LIST , id 
//show todays date
const options = {weekday: "long", month:"short", day:"numeric"}
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//add to do function

function addReminder (toDo, id, done, trash) {

    if(trash){ return; }
    const DONE = done ? Check : Uncheck;
    const LINE = done ? LineThru : "";
    const item = `<li class="item">
            <i class="fa ${DONE}" job="complete" id="${id}"></i>
            <p class="text" ${LINE}>${toDo} </p>
            <i class="fa fa-trash-o delete" job="delete id="${id}></i>
            </li>
    `

    const position = "beforeend";
    list.insertAdjacentHTML(position, item);

}
// addReminder("buy coffee", 1, false, false)
//event to add

document.addEventListener("keyup", event => {
    if (event.keyCode === 13){
        const toDo = input.value;
        //if the input isn't empty
        if(toDo){
            addReminder(toDo,id, false, false);
            LIST.push(
                {
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false
                });  
                id++
        }
        input.value = "";
        
    }
})