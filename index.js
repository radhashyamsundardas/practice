const path = require('path');
const express = require('express');
const app = express();
const port = 3001;

// console.log(__dirname);
const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get('/', (req,res)=>{
    res.send ('harekrishna, srilaPrabhupada ki jai!')
});

app.get('/about', (req,res) =>{
    res.send('bolo shri shri gaur nitai ki jai');
});

app.get('/hiren', (req,res)=>{
    res.send('jai jai shri shri radhashyamsundar ki jai');
});

app.get('/neha', (req,res) => {
    res.send('This is all mercy of Shri Shri RadhaShyamsundar');
})




app.listen(3001, ()=> {
    console.log(`listening to the port no ${port}`);
});
