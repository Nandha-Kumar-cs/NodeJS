const express = require('express');
const app = express();

const port = 3000 ;
const host = '127.0.0.1';

app.use(express.json());
app.use(express.urlencoded({extended:true}));
// for task
const taskRoute = require('./task/task');
const webRoute = require('./web/webRoute');
app.use('/task' , taskRoute);
app.use('/web' , webRoute);

app.listen(port ,host, function(){
    console.log(`server is running on port ${port}`);
});