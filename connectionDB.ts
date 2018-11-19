//MySql module
import mysql = require('mysql');

//querys de sql.
import MetodosSql from './MetodosSql';

//objeto temporal
var signinDB = {
	host: 'localhost',
	user: 'root',
	password: 'j26966212',
	database: ''
}

// Conectando a la base de datos.
const connection = mysql.createConnection(signinDB);

signinDB = {
	host: '',
	user: '',
	password: '',
	database: ''
}


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

querys.createDB('mydb');

querys.deleteDB('mydb');
