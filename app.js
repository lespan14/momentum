/*const express = require("express");
const server = express();

server.use(express.static(__dirname + "/css"));

server.get("/", (req, res) => {
 
  res.sendFile(__dirname + "/index.html");
});

server.get("/about", (req, res) => {
  res.sendFile(__dirname + "/about.html");
});

server.use((req, res) => {
  res.sendFile(__dirname + "/404.html");
});

server.listen(3300, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3300");
});*/

let http = require('http');
let fs = require('fs');
let app = http.createServer(function(req,res){
    let url = req.url;
    if(url == '/'){
        url = '/index.html';
    }
    res.writeHead(200);
    res.end(fs.readFileSync(__dirname+url));
});
app.listen(3300, (err) => {
    if (err) return console.log(err);
    console.log("The server is listening on port 3300");
});