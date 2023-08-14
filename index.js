const { prompt } = require('inquirer'); // import inquirer.prompt
const db = require('./db/db'); //import database
const { mainMenu, departmentQuestions, roleQuestions, employeeQuestions, updateRoleQuestions } = require('./questions.js'); //import questions
const { default: Choices } = require('inquirer/lib/objects/choices.js');

init() // call function to start application

function init() {
    let message = '   ______                 _                         __  __                                   \r\n |  ____|               | |                       |  \\\/  |                                  \r\n | |__   _ __ ___  _ __ | | ___  _   _  ___  ___  | \\  \/ | __ _ _ __   __ _  __ _  ___ _ __ \r\n |  __| | \'_ ` _ \\| \'_ \\| |\/ _ \\| | | |\/ _ \\\/ _ \\ | |\\\/| |\/ _` | \'_ \\ \/ _` |\/ _` |\/ _ \\ \'__|\r\n | |____| | | | | | |_) | | (_) | |_| |  __\/  __\/ | |  | | (_| | | | | (_| | (_| |  __\/ |   \r\n |______|_| |_| |_| .__\/|_|\\___\/ \\__, |\\___|\\___| |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|   \r\n                  | |             __\/ |                                      __\/ |          \r\n                  |_|            |___\/                                      |___\/           \r\n';

    console.log(message); // log ascii art in console

    loadMenu(); // call function to start main menu
}

function loadMenu() {
    prompt(mainMenu)
        .then(res => {
            let task = res.task;
            // call function based on user choice in main menu
            switch (task) {
                case 'View all departments':
                    displayDepartments(); // call function to show all departments
                    break;
                case 'View all roles':
                    displayRoles(); // call function to show all roles
                    break;
                case 'View all employees':
                    displayEmployees(); // call function to show all employees
                    break;
                case 'Add a department':
                    newDepartment(); // call function to add new department
                    break;
                case 'Add a role':
                    newRole(); // call function to add new role
                    break;
                case 'Add an employee':
                    newEmployee(); // call function to add new employee
                    break;
                case 'Update an employee role':
                    updateRole(); // call function to update role
                    break;
                default:
                    end(); // call function to quit application
            };
        });
}

function displayDepartments() {
    db.findAllDepartments() // call function in db.js to show all departments


        //then do something with the answer and resolve the promise
        .then(([answer]) => {
            let departments = answer;
            console.log('\n');
            //display departments
            console.table(departments);
        })
        //return mainMenu
        .then(() => loadMenu())
        //show error in console
        .catch(err => console.log(err));
};

function displayRoles() {
    db.findAllRoles() // call function in db.js to show all roles
        .then(([answer]) => {
            let roles = answer;
            console.log('\n');
            //display roles
            console.table(roles);
        })
        .then(() => loadMenu())
        .catch(err => console.log(err));
};

function displayEmployees() {
    db.findAllEmployees() // call function in db.js to show all employees
        .then(([answer]) => {
            let employees = answer;
            console.log('\n');
            //display employees
            console.table(employees);
        })
        .then(() => loadMenu())
        .catch(err => console.log(err));
};

function newDepartment() {
    prompt(departmentQuestions) // present questions to add new department
        .then((answer) => {
            db.addDepartment(answer) // call function in db.js to add new department
            console.log('\n');
            console.log('New department added!');
            console.log('\n');
        })
        .then(() => loadMenu())
        .catch(err => console.log(err));
};

function newRole() {
    prompt(roleQuestions) // present questions to add new role
        .then((answer) => {
            db.addRole(answer) // call function in db.js to add new role
            console.log('\n');
            console.log('New role added!');
            console.log('\n');
        })
        .then(() => loadMenu())
        .catch(err => console.log(err));
};

function newEmployee() {
    prompt(employeeQuestions) // present questions to add new employee
        .then((answer) => {
            db.addEmployee(answer) // call function in db.js to add new employee
            console.log('\n');
            console.log('New employee added!');
            console.log('\n');
        })
        .then(() => loadMenu())
        .catch(err => console.log(err));
};

function updateRole() {
    prompt(updateRoleQuestions) // present questions to update role
        .then((answer) => {
            db.updateEmployeeRole(answer) // call function in db.js to update role
            console.log('\n');
            console.log('Employee role updated!');
            console.log('\n');
        })
        .then(() => loadMenu())
        .catch(err => console.log(err));
};

function end() {
    console.log("Goodbye!");
    process.exit(); // quit application
}