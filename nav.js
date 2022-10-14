const express = require('express');
const app = express();
const port = 3002;

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get('/', (req,res) => {
    res.write('<h1>Welcome to my homepage<h1>');
    res.write(`<h1>welcome to lalalal</h1>`);
    res.send();
});

app.get('/about', (req,res)=> {
    res.send('Welcome to my about page');
});

app.get('/contact', (req,res) => {
    res.send('welcome to my contact page');
});

app.get('/temp', (req,res) => {
    res.json([{
        name: 'buggota',
        model: 2006,
        tyres: 4,
        color: `black`,
        height: 5.2,
    },
    {
        name: 'buggota',
        model: 2006,
        tyres: 4,
        color: `black`,
        height: 5.2,
    },
    {
        name: 'buggota',
        model: 2006,
        tyres: 4,
        color: `black`,
        height: 5.2,
    },
    {
        name: 'buggota',
        model: 2006,
        tyres: 4,
        color: `black`,
        height: 5.2,
    },
]);
});




app.listen('3002',() => {
    console.log(`listening to the port no ${port}`);
} );