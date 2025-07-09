const express = require("express");
const router = express.Router();

const task = [];
router.get("/allTask", (req, res) => {
  res.json(task);
});


router.get('/:id' , (req , res)=>{
    let id = req.params.id;
    let findTask = task.find(t => t.id === id);
    if(!findTask)
    {
        return res.send(id);
    }
    res.json(findTask);
});


router.post("/addTask", (req, res) => {
  const { job } = req.body;
  let newTask = {
    id: task.length + 1,
    task: job,
  };
  task.push(newTask);
  res.status(201).json(newTask);
});

router.put("/update", (req, res) => {
  const id = req.query.id;
  const { job } = req.body;

  let findTak = task.find((t) => t.id == id);

  if (!findTak) {
    return res.send("Invalid task ID .");
  }

  if (!job) {
    return res.send("Task is Mandatory !");
  }

  findTak.task = job;
  res.json(findTak);
});

router.delete('/:id' , (req ,res)=>{
    const id = req.params.id ;
    if(!id)
    {
        return res.send('Id Must !');
    }
    let index = task.findIndex(t => t.id == id);
    if(!index)
    {
        return res.send('Id not Found  !');
    }

    let removed = task.splice(index , 1);
    var response = {
        removed : removed[0] ,
        remaining_task : task 
    };

    res.json(response);
});

module.exports = router;
