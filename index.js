const express = require("express");
const cors = require("cors")
const port = process.env.PORT || 4000;

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("doc is running")
})

app.listen(port, () => {
    console.log("doc server is running");
})

