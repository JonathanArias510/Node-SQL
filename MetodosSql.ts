export default class MetodosSql {

	private connection;

	private sqlCom = {
		createDB: 'CREATE DATABASE ',
		delateDB: 'DROP DATABASE ',
		createTB: 'CREATE TABLE ',
		insertTB: 'INSERT INTO ',
		selectTB: 'SELECT * FROM ',
	}

	constructor(connection: object){
		this.connection = connection;
	}

	createDB(nameDB: string){
		this.connection.query((`${this.sqlCom.createDB} ${nameDB} `), (err, result) => {
			if(err){
				console.log('\nOcurrio un error \n');
				throw err;
			}else{
				console.log(result);
				console.log(`\nDataBase "${nameDB}" is created\n`);
			}
		});
	}

	deleteDB(nameDB: string){
		this.connection.query((`DROP DATABASE ${nameDB}`), (err, result) => {
			if(err){
				console.log('\nOcurrio un error\n');
				throw err;
			}else{
				console.log(result);
				console.log(`\nDataBase "${nameDB}" is delate\n`);
			}
		});
	}





}
