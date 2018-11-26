const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send('hello Node from Docker')
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})