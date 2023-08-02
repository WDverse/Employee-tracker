const inquirer = require('inquirer');
const fs = require('fs');

const questions = inquirer
    .prompt([

        {
            type: 'list',
            name: 'task',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        },

        {
            type: 'input',
            name: 'department',
            message: 'What is the name of the department?'
        },

        {
            type: 'input',
            name: 'role',
            message: 'What is the name of the role?'
        },

        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary of the role?'
        },

        {
            type: 'input',
            name: 'new-role',
            message: 'Which department does the role belong to?',
            choices: ['Finance', 'Legal', 'Sales', 'Service']
        },

        {
            type: 'input',
            name: 'firstname',
            message: "What is the employee's first name?"
        },

        {
            type: 'input',
            name: 'lastname',
            message: "What is the employee's last name?"
        },

        {
            type: 'input',
            name: 'employee-role',
            message: "What is the employee's role?",
            choices: ['Account Manager', 'Legal Lead', 'Sales Lead', 'Lawyer', 'Software Engineer', 'Legal Team Lead', 'Sales Person', 'Accountant',]
        },

        {
            type: 'input',
            name: 'manager',
            message: "Who's the employee's manager?",
            choices: ['Mike Chan', 'Naruto Uzumaki', 'Emmanuel Appiagyei', 'Cristiano Ronaldo', 'John Doe']
        },

        {
            type: 'input',
            name: 'update',
            message: "Which employee's role do you want to update?",
            choices: ['Mike Chan', 'Naruto Uzumaki', 'Emmanuel Appiagyei', 'Cristiano Ronaldo', 'John Doe', 'Tom Allen', 'Emma Watson', 'Tom Brown']
        },

        {
            type: 'input',
            name: 'update',
            message: "Which role do you want to assign the selected employee?",
            choices: ['Account Manager', 'Legal Lead', 'Sales Lead', 'Lawyer', 'Software Engineer', 'Legal Team Lead', 'Sales Person', 'Accountant',]
        },
    ])