const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/db');

const { mainMenu, departmentQuestions, roleQuestions, employeeQuestions, updateRoleQuestions } = require('./questions.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');


let message = '  ______                 _                         __  __                                   \r\n |  ____|               | |                       |  \\\/  |                                  \r\n | |__   _ __ ___  _ __ | | ___  _   _  ___  ___  | \\  \/ | __ _ _ __   __ _  __ _  ___ _ __ \r\n |  __| | \'_ ` _ \\| \'_ \\| |\/ _ \\| | | |\/ _ \\\/ _ \\ | |\\\/| |\/ _` | \'_ \\ \/ _` |\/ _` |\/ _ \\ \'__|\r\n | |____| | | | | | |_) | | (_) | |_| |  __\/  __\/ | |  | | (_| | | | | (_| | (_| |  __\/ |   \r\n |______|_| |_| |_| .__\/|_|\\___\/ \\__, |\\___|\\___| |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|   \r\n                  | |             __\/ |                                      __\/ |          \r\n                  |_|            |___\/                                      |___\/           \r\n'

console.log(message);

inquirer.prompt(mainMenu)
    .then(res => {
        console.log(res);
        console.log('res.task: ', res.task,)

        switch (res.task) {
            case 'View all departments':
                displayDepartments();
                break;

            case 'View all roles':
                displayRoles();
                break;

            case 'View all employees':
                displayEmployees();
                break;

            case 'Add a department':
                newDepartment();
                break;
        }
    })

function displayDepartments() {
    db.findAllDepartments()

        //query all departments out of database
        .then(([answer]) => {
            //then do something with the answer and resolve the promise 
            let departments = answer;
            console.log('\n');
            console.table(departments);

            //display departments 
        })
        .then(() => mainMenu)
        .catch(err => console.log(err));
}


function displayRoles() {
    db.findAllRoles()

        //query all roles out of database
        .then(([answer]) => {
            //then do something with the answer and resolve the promise 
            let roles = answer;
            console.log('\n');
            console.table(roles);

            //display roles 
        })
        .then(() => mainMenu)
        .catch(err => console.log(err));
}
function displayEmployees() {
    db.findAllEmployees()

        //query all employees out of database
        .then(([answer]) => {
            //then do something with the answer and resolve the promise 
            let employees = answer;
            console.log('\n');
            console.table(employees);

            //display employees 
        })
        .then(() => mainMenu)
        .catch(err => console.log(err));
}


function newDepartment() {
    inquirer.
        prompt(departmentQuestions);

    db.addDepartment(ans)
    .then(([answer]) => {
            let addDepartment = answer;
            console.log('\n');
            console.table(addDepartment);
        })
        .then(() => mainMenu)
        .catch(err => console.log(err));
}