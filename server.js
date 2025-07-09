const http = require('http');
const express = require('express');
const app = express();

const port = 3000 ;
const host = '127.0.0.1';

app.use(express.json());

// for task
const taskRoute = require('./task/task');
app.use('/task' , taskRoute);


app.listen(port  , function(){
    console.log(`server is running on port ${port}`);
});