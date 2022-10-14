const express = require('express');
const app = express();
const host = 3001;

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
    console.log(`listening to the port${port}`)
});

