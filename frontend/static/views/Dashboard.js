import baseView from "./baseView.js";

export default class extends baseView {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1> Welcome back, user</h1>
        
        <h2> current reminders</h2>
        <ul>
            <li>wake up</li>
            <li>jog 2 miles</li>
            <li>say something nice about yourself</li>
        
        `;
    }


}