const express = require('express');
const router = express.Router();
const con = require('./db');
const bcrypt = require('bcrypt');
router.get('/' , (req , res)=>{
    res.send('working');
});

router.get('/register' , (req , res) => {
    res.sendFile(__dirname+'/register.html');
});

router.get('/login' , (req , res) => {
    res.sendFile(__dirname+'/login.html');
});


// database routes
router.post('/db/store' , async (req, res)=>{
   var  {username  , email , password} = req.body;
   password = await  bcrypt.hash(password , 10);
   let insert = "INSERT into users (name , email , password) values(? , ? , ? )";
   con.query(insert , [username , email , password] , (err , result)=>{
    if(err) res.send(`Error occurs when insertion ${err}`);
    else res.send('Data inserted SuccessFully !');
   });
});
module.exports = router;

