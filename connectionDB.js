"use strict";
exports.__esModule = true;
//MySql module
var mysql = require("mysql");
//querys de sql.
var MetodosSql_1 = require("./MetodosSql");
//objeto temporal
var signinDB = {
    // database: "ingnovat_prueba",
    // port: "3306"
};
// Conectando a la base de datos.
var connection = mysql.createConnection({

  host: "199.79.62.144",
  user: "ingnovat_stiven",
  password: "#Ing2017",
  database: "ingnovat_prueba",
  port: '3306'
//
// 199.79.62.144
});
// signinDB = {
// 	host: '',
// 	user: '',
// 	password: '',
// 	database: ''
// }
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
// var querys = new MetodosSql_1["default"](connection);
// querys.createDB('mydb');
// querys.deleteDB('mydb');
