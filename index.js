const inquirer = require('inquirer');
const fs = require('fs');

const {mainMenu,departmentQuestions, roleQuestions, employeeQuestions, updateRoleQuestions} = require ('./questions.js');
inquirer.prompt (mainMenu)
.then (res => {
    console.log (res);
    
})