const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}
// import Dashboard from "./views/Dashboard.js";
const router = async () => {
    const routes = [
        { path: "/", view: Dashboard },
        // { path: "/reminder", view: () => console.log("Viewing Reminder")},
        // { path: "/pet", view: () => console.log("Viewing pet")}
        // { path: "/", view: () => console.log("Viewing Dashboard")}
    ];

    const possibleMatch = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

        let match = possibleMatch.find(possibleMatches => possibleMatches.isMatch);

        if (!match) {
            match = {
                route: routes[0],
                isMatch: true
            }
        }
        const view = new match.route.view();

        document.querySelector("#app").innerHTML = await view.getHtml();
        console.log(match.route.view());
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {

    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })

    router();
});

//list

const list = document.getElementById("list");

function addReminder (toDo) {

    const text = `<li class="item">
            <i class="co fa fa-circle-thin" job="complete"></i>
            <p class="text">${toDo} </p>
            <i class="de fa fa-trash-o" job="delete></i>
    </li>`

    const position = "beforeend";
    list.insertAdjacentElement(position, text);

}

//event to add

// document.addEventListener("keyup", event => {
//     if (event.key ==)
// })