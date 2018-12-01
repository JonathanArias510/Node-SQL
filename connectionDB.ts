//MySql module
import mysql = require('mysql');

//querys de sql.
import MetodosSql from './MetodosSql';

//objeto temporal
var signinDB = {

  host: "199.79.62.144",
  user: "ingnovat_stiven",
  password: "#Ing2017",
  database: "ingnovat_prueba",
  port: '3306'

}

// Conectando a la base de datos.
const connection = mysql.createConnection(signinDB);

// signinDB = {
// 	host: '',
// 	user: '',
// 	password: '',
// 	database: ''
// }


connection.connect((err) => {
	if(err){
		console.log(`
			Database is disconnected
		`);
		throw err;
	}else{
		console.log(`
			Database is connected
		`);
	}
});

//Querys

const querys = new MetodosSql(connection);

// querys.createDB('mydb');
// querys.deleteDB('mydb');

querys.useDB('ingnovat_prueba');

querys.insertDB('ingnovat_prueba','personas');
