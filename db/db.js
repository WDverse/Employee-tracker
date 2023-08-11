const mysql = require('mysql2');
const inquirer = require('inquirer');
const connection = require('./connection');

class Db {
    constructor(connection) {
        this.connection = connection;
    }
    findAllDepartments() {
        return this.connection.promise().query(
            `SELECT 
            * FROM department`,
        );

    };

    findAllRoles() {
        return this.connection.promise().query(
            `SELECT 
            role.id, 
            title, 
            department.name AS department,
            salary 
            FROM role 

            LEFT JOIN 
            department 
            ON role.department_id = department.id`,
        );
    };

    findAllEmployees() {

        return this.connection.promise().query(
            `SELECT  
            employee.id, 
            employee.first_name, 
            employee.last_name, 
            role.title AS role,
            department.name AS department,
            role.salary,
            CONCAT (employee.first_name, ' ', employee.last_name) as manager
            FROM employee 
            
            LEFT JOIN 
            role 
            ON employee.role_id = role.id 

            LEFT JOIN 
            department
            ON role.department = department.id

            LEFT JOIN 
            employee 
            ON employee.manager_id = manager`

        );
    };

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