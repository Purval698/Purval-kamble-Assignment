//Q.1.

const http = require("http");
const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end("Success, I'm listening from port: 3000");
});
server.listen(3000, '127.0.0.1');
console.log("Success, I'm listening from port: 3000.");


//Q.2 

var fs = require("fs");
 var fileName = process.argv[2];
 fs.readFile(fileName, "utf8", (err, data) => {
     if (err) throw err;
     console.log(data);
 });

 //Q.3

 const path = require("path");
const dirPath = path.join(__dirname, '/app-files');
fs.readdir(dirPath, function(err, files) {
    files.forEach(function(file) {
        console.log(file);
    });
});

//Q.4

const fs = require("fs");

fs.writeFile('demo.txt', "text", (err) => {
    if (err) throw err;
    console.log("The file was saved!");
    return;
});

//Q.5

const fs = require("fs");
fs.readFile('demo.txt', 'utf8', (err, data) => {
    if (err) { console.log(err) };
    let occurenceArray = data.match(/John/ig);
    if (occurenceArray === null || occurenceArray.length <= 0) {
        console.log(0);
    } else {
        console.log(occurenceArray.length);
    }
});


//Q.6


//Q.7

var http=require('http');
var moment=require('moment');
var strftime = require('strftime')

var server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var strftime = require('strftime');
    console.log(strftime('%B %d, %Y %H:%M:%S')) 
    console.log(strftime('%F %T', new Date(1307472705067)))
});

server.listen(3000,'127.0.0.1');
console.log("server is listening on port 3000");

//Q.8

const fs = require('fs')

var arr = [];

var file = fs.readFileSync("number.txt", "utf8");
var arr = file.split(' ');

arr = arr.map(x => parseInt(x));

console.log(`Numbers: ${arr}`);
console.log(arr.reduce((a, b) => a + b));

//Q.9

var fs = require('fs')
var concat = require('concat-stream')

console.log('Reading the file demo.txt...');
fs.readFile('demo.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log('Returning the values of the file as a array:');
    var data = data.split(' ');
    console.log(data);
});



//Q.10


var fs = require ('fs');

fs.writeFile('myText.txt', "hey ho! let's go", function(err) {
  if (err) throw err;
  console.log('The file has been saved!');
});

fs.appendFile('myText.txt', "\nit's a long way to the top...", function(err) {
    if (err) throw err;
    console.log('The file has been updated!');
  });

fs.readFile('myText.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});


//Q.11

var fs = require('fs');

console.log('Reading the file demo.txt...');
fs.readFile('demo.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    console.log(data);
});


//Q.12

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);

let month = ("0" + date_ob.getMonth() + 1).slice(-2);

let year =  date_ob.getFullYear();

let hours = date_ob.getHours();
 
let minutes = date_ob.getMinutes();

let seconds = date_ob.getSeconds();

console.log(year + "-" + month + "-" + date + " \n" + hours + ":" + minutes + ":" + seconds);



//Q.13




