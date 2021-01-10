const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Dashboard")},
        { path: "/reminder", view: () => console.log("Viewing Reminder")},
        { path: "/pet", view: () => console.log("Viewing pet")}
        // { path: "/", view: () => console.log("Viewing Dashboard")}
    ];

    const possibleMatch = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

        console.log(possibleMatch);
};

document.addEventListener("DOMContentLoaded", () => {
    router();
});

