const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>DYZIO</h1>")
})

app.listen(2137, () =>{
    console.log("Server Start on port 5000");
})