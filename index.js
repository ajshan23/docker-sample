import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({ msg: "Hello World" });
})

app.get("/test", (req, res) => {
    res.json({ msg: "Test" });
})

app.listen(6000, () => {
    console.log("Listening on port 3000");
})