import Dashboard from "./views/Dashboard.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

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

