const inquirer = require('inquirer');
const fs = require('fs');
const db = require('./db');

const { mainMenu, departmentQuestions, roleQuestions, employeeQuestions, updateRoleQuestions } = require('./questions.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');
inquirer.prompt(mainMenu)
    .then(res => {
        console.log(res);
        console.log('res.task: ', res.task,)

        switch (res.task) {
            case 'View all departments':
            // console.log(SELECT * FROM department);
        }
    })

