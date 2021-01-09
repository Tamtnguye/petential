const express = require("express");
const path = require("path");
const PORT = 5001
const app = express();

app.use("/static", express.static(path.resolve(__dirname,"frontend", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname,"frontend","html","home.html"));
});

app.listen(process.env.PORT || 5001, () => console.log(`Server Running at ${PORT}`));