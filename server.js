const express = require('express');
const app =  express();
const taskRoute = require('./task/task');
app.use('/task' ,taskRoute );
app.listen(3000 , function(){
    process.stdout.write('server is running');
});