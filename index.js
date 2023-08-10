const inquirer = require('inquirer');
const fs = require('fs');

const { mainMenu, departmentQuestions, roleQuestions, employeeQuestions, updateRoleQuestions } = require('./questions.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');
inquirer.prompt(mainMenu)
    .then(res => {
        console.log(res);
    })
    // if (choices  === "View all departments"){
    //     inquirer.prompt(departmentQuestions);
    // }