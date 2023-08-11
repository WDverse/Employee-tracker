const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = require('./connection');

class Db {
    constructor(connection) {
        this.connection = connection;
    }
    findAllDepartments() {
        return this.connection.promise().query(
            'SELECT * FROM department'
        );

    }

    findAllRoles() {
        return this.connection.promise().query(
        'SELECT * FROM role JOIN department ON role.department_id = department.id')
    };

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


module.exports = new Db(connection);