var mysql = require('mysql2');
var express = require('express');
app = express();


var DatabaseConnectionConfig = {
    host:"localhost",
    user:"root",
    password:"TaMiMa5022E",
    database:"school"
}
var con = mysql.createConnection(DatabaseConnectionConfig);
con.connect(function(error){
    if(error){console.log("Connection Fail")}
    else{console.log("Connection Success")}
    //insertData(con);
    //deleteData(con);
    //updateData(con);
    //selectData(con);
})

function insertData(con){
    let SQL_Query = "INSERT INTO school(name,roll_no,class,city) VALUES('Salma','3','Nine','CTG')";
    con.query(SQL_Query, function(error){
        if(error){console.log("Data Insert Fail")}
        else{console.log("Data Insert Success")}
    })
}
function deleteData(con){
    let SQL_Query = "DELETE FROM school WHERE roll_no = '02'";
    con.query(SQL_Query, function(error){
        if(error){console.log("Data Delete Fail")}
        else{console.log("Data Delete Success")}
    })
}

function updateData(con){
    let SQL_Query = "UPDATE school SET city='CTG' WHERE name='Tamima'";
    con.query(SQL_Query, function(error){
        if(error){console.log("Data Update Fail")}
        else{console.log("Data Update Success")}
    })
}

function selectData(con){
    let SQL_Query = "SELECT * FROM school";
    con.query(SQL_Query, function(error,result){
        if(error){console.log("Data Select Fail")}
        else{console.log(result)}
    })
}

app.get("/home",function(req, res){
    let SQL_Query = "SELECT * FROM school";
    con.query(SQL_Query,function(error,result){
        if(error){console.log("Data Select Fail")}
        else{res.send(result)}
    })
});

app.listen(8000, function(){
    console.log("Server Run Success")
})
