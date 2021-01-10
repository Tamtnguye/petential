const express = require("express");
const path = require("path");
const PORT = 5001
const app = express();
const cors = require("cors");


app.use(cors());


//middleware


app.use(express.static("frontend"));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"html","index.html"));
});

app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname,"html","home.html"));
});
app.get("/signup", (req, res) => {
    res.sendFile(path.resolve(__dirname,"html","signup.html"));
});

app.get("/nwhacks", (req, res) => {
    res.sendFile(path.resolve(__dirname,"html","nwhacks.html"));
});

app.listen(process.env.PORT || 5001, () => console.log(`Server Running at ${PORT}`));