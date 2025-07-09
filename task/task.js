const express = require('express');
const router = express.Router();
const prompt = require('readline');

let taskArray = [1,2,43,5]; 
let id = 0 ;

router.get('/all_task' , (req , res) => {
    res.send(taskArray);
});

router.get('/add_data' , (req , res)=>{
    var task = prompt('Enter the task id');
    taskArray.push(id);
});

module.exports = router;