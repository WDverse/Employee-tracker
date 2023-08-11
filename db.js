const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = require('./connection');

class Db {
    constructor(connection) {
        this.connection = connection;
    }
    findAllDepartments() {
        connection.query("SELECT * FROM department", function (err, result, fields) {
            if (err) throw err;
            console.log('result:', result);
        });

    }

    findAllRoles() {

    }

    findAllEmployees() {

    }

    addDepartment() {

    }

    addRole() {

    }

    addEmployee() {

    }

    updateEmployeeRole() {

    }
}


// module.exports = {
//     findAllDepartments
// };