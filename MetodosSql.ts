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

	selectDB(nameDB: string, nameTB){
		this.connection.query((`${ this.sqlCom.selectTB }${ nameTB}`), (err, result) => {
			if(err){
				console.log('\nOcurrio un error\n');
				throw err;
			}else{
				console.log(result);
				console.log(`\nDataBase "${nameDB}" Selected Table ${ nameTB }\n`);
			}
		});
	}

	useDB(nameDB: string){
		this.connection.query((`USE ${nameDB}`), (err, result) => {
			if(err){
				console.log('\nOcurrio un error\n');
				throw err;
			}else{
				console.log(result);
				console.log(`\nDataBase "${nameDB}" is delate\n`);
			}
		});
	}

	insertDB(nameDB: string, nameTB: String ){
		this.connection.query(( "INSERT INTO Personas (Codigo_Persona, Nombre_Persona) VALUES ('123456789123456789', 'PRUEVA MAL ESCRITA')"), (err, result) => {
			if(err){
				console.log('\nOcurrio un error\n');
				throw err;
			}else{
				console.log(result);
				console.log(`\nDataBase "${nameDB}" Selected Table ${ nameTB }\n`);
			}
		});
	}




}
