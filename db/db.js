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
            CONCAT (employee.first_name, " ", employee.last_name) as employee,
            role.title AS role,
            department.name AS department,
            role.salary,
            CONCAT (employee.first_name, " ", employee.last_name) as manager
            FROM employee 
            
            LEFT JOIN 
            role 
            ON employee.role_id = role.id 

            LEFT JOIN 
            department
            ON role.department_id = department.id

            LEFT JOIN 
            employee manager 
            ON employee.manager_id = employee.manager_id`

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