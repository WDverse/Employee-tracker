const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db/db');

const { mainMenu, departmentQuestions, roleQuestions, employeeQuestions, updateRoleQuestions } = require('./questions.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');
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
        }
    })

function displayDepartments(){
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


function displayRoles(){
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
function displayEmployees(){
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