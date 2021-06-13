//Q.1

const express = require('express');

const app = express();
app.get('/', function (req, res) {
    res.send('Hello, World!');
})

console.log("Listening to the port 8000");
app.listen(process.env.port || 8000);

//Q.2

const express = require('express');

const app = express();

app.get('/year', (req, res) => {
    
    res.set({ 'Content-Type': 'text/plain; charset=utf-8' });
    
    const age = req.query.age;
    let currentYear = new Date().getFullYear();
    let year = currentYear - age;
    res.send(`You were born in ${year}.`);
});

app.listen(8000, () => console.log('You are Listening to the port 8000...'));

//Q.3

const express = require('express');

const app = express();
app.get('/home', function (req, res) {
    res.send('Hello, World!');
})

console.log("Listening to the port 8000");
app.listen(process.env.port || 8000);

//Q.4


const express = require('express');
const event = new Date();


const app = express();


app.get('/', function (req, res) {
    res.send('<h1>Hello, World!</h1>');
})

app.get('/time', function (req, res) {
    res.send(`<h4>${event.toISOString()}</h4>`);
})
console.log("Listening to the port 8000");
app.listen(8000);

