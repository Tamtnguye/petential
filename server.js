const express = require("express");
const path = require("path");
const PORT = 5001
const app = express();

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("index.html"));
});

app.listen(process.env.PORT || 5001, () => console.log(`Server Running at ${PORT}`));