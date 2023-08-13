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
            CONCAT(manager.first_name, ' ', manager.last_name) AS manager 
            FROM employee 

            LEFT JOIN 
            role 
            ON employee.role_id = role.id 

            LEFT JOIN 
            department 
            ON role.department_id = department.id 
            
            LEFT JOIN 
            employee manager 
            ON manager.id = employee.manager_id;`

        );
    };

    addDepartment(ans) {
        return this.connection.promise().query(
            `INSERT INTO department(name)
            VALUES (${ans})`
        )

    }

    addRole() {

    }

    addEmployee() {

    }

    updateEmployeeRole() {

    }
}


module.exports = new Db(connection);