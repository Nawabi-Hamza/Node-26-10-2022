console.log("Testing...")
// for install or use database install this or type in Terminal (npm install mysql)
var mysql = require('mysql')
var con = mysql.createConnection({
        host:'localhost',
        user:'root',
        pass:'',
        database: 'dbNode'
        })
    
    con.connect((err)=>{  
        var sql = 'INSERT INTO customers(name,address,email) VALUES("Noori1","kabul","example@gmail.com")'
        con.query(sql,(err)=>{
        console.log("user added")
        })
    })