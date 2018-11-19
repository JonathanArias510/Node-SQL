"use strict";
exports.__esModule = true;
var MetodosSql = /** @class */ (function () {
    function MetodosSql(connection) {
        this.sqlCom = {
            createDB: 'CREATE DATABASE ',
            delateDB: 'DROP DATABASE ',
            createTB: 'CREATE TABLE ',
            insertTB: 'INSERT INTO ',
            selectTB: 'SELECT * FROM '
        };
        this.connection = connection;
    }
    MetodosSql.prototype.createDB = function (nameDB) {
        this.connection.query((this.sqlCom.createDB + " " + nameDB + " "), function (err, result) {
            if (err) {
                console.log('\nOcurrio un error \n');
                throw err;
            }
            else {
                console.log(result);
                console.log("\nDataBase \"" + nameDB + "\" is created\n");
            }
        });
    };
    MetodosSql.prototype.deleteDB = function (nameDB) {
        this.connection.query(("DROP DATABASE " + nameDB), function (err, result) {
            if (err) {
                console.log('\nOcurrio un error\n');
                throw err;
            }
            else {
                console.log(result);
                console.log("\nDataBase \"" + nameDB + "\" is delate\n");
            }
        });
    };
    return MetodosSql;
}());
exports["default"] = MetodosSql;
