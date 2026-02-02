// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World\n')
// });

// server.listen(3000,'127.0.0.1',() => {
//     console.log('Server running at http://127.0.0.1:3000/')
// });


const express = require('express')

const app = express()

const port = 3000

app.get('/' , (req , res) => {
    res.send('Hello World from Express');
})



app.listen(port , () => {
    console.log('Server is runing on http://localhost:3000')
})