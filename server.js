const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//get requests
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get(`/api/notes`, (req, res) => {
   res.json(notes);
 });

// post request 
app.post(`/api/notes`, (req, res) => {
    notes.push(req.body)
    res.json(notes)
    });
    
//port listener
app.listen(PORT, () => {
    console.log(`start!`)
    });