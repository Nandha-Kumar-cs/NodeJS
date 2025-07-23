const mysql = require('mysql2');
const con = mysql.createConnection({
    host : 'localhost' ,
    user : 'root' ,
    password : '',
    database : 'zpanel'
});
con.connect((err)=>{
          if(err)
                 console.log('connection failed ' + err.stack); 
          else 
                console.log('Connection succeed !');
});
module.exports = con;