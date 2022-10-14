const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req,res) => {
    res.send('Welcome to my homepage');
});

app.get('/about', (req,res)=> {
    res.send('Welcome to my about page');
});

app.get('/contact', (req,res) => {
    res.send('welcome to my contact page');
});

app.get('/temp', (req,res) => {
    res.send('welcome to my temp page');
});




app.listen('3002',() => {
    console.log(`listening to the port no ${port}`);
} );