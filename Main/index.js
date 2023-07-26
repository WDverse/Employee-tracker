const inquirer = require('inquirer');
const fs = require('fs');

const questions = inquirer
    .prompt([

        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role','Add an employee', 'update an employee role']
        },
    ])