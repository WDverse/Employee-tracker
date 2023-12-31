const mysql = require('mysql2'); // import mysql
const inquirer = require('inquirer'); // import inquirer
const connection = require('./connection'); // import connection.js

class Db {
    constructor(connection) {
        this.connection = connection;
    }
    // queries to show all departments
    findAllDepartments() {
        return this.connection.promise().query(
            `SELECT 
            * FROM department`,
        );
    };
    // queries to show all roles
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
    // queries to show all employess
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
    // queries to add new department
    addDepartment(answer) {
        return this.connection.promise().query(
            `INSERT INTO department(name)
            VALUES ("${answer.department}")`
        );

    };
    // queries to add new role
    addRole(answer) {
        return this.connection.promise().query(
            `INSERT INTO role (title, salary, department_id)
            VALUES 
            ("${answer.role}",
            ${answer.salary}, 
            ${answer.newRoleDepartment})`
        );
    };
    // queries to add new employee
    addEmployee(answer) {
        return this.connection.promise().query(
            `INSERT INTO employee (first_name, last_name,role_id, manager_id)
            VALUES 
            ("${answer.firstname}",
            "${answer.lastname}", 
            ${answer.employeeRole},
            ${answer.manager})`
        );
    };
    // queries to update employee role
    updateEmployeeRole(answer) {
        return this.connection.promise().query(
            `UPDATE employee 
            SET employee.role_id = ${answer.emRoleUpdate}
            WHERE employee.id = ${answer.emUpdate}
            `
        );
    };
};

// export class Db
module.exports = new Db(connection);