"use strict";
exports.__esModule = true;
//MySql module
var mysql = require("mysql");
//querys de sql.
var MetodosSql_1 = require("./MetodosSql");
//objeto temporal
var signinDB = {
    host: 'localhost',
    user: 'root',
    password: 'j26966212',
    database: ''
};
// Conectando a la base de datos.
var connection = mysql.createConnection(signinDB);
signinDB = {
    host: '',
    user: '',
    password: '',
    database: ''
};
connection.connect(function (err) {
    if (err) {
        console.log("\n\t\t\tDatabase is disconnected\n\t\t");
        throw err;
    }
    else {
        console.log("\n\t\t\tDatabase is connected\n\t\t");
    }
});
//Querys
var querys = new MetodosSql_1["default"](connection);
querys.createDB('mydb');
querys.deleteDB('mydb');
