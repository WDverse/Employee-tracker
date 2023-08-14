const db = require('./db/db'); //import database
const inquirer = require('inquirer'); //import inquirer

// main menu
const mainMenu = [
    {
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', new inquirer.Separator(), 'Quit']
    },
];

// questions to add new department 
const departmentQuestions = [
    {
        type: 'input',
        name: 'department',
        message: 'What is the name of the department you want to add?'
    },
];

// questions to add new role 
const roleQuestions = [
    {
        type: 'input',
        name: 'role',
        message: 'What is the name of the role you want to add?'
    },

    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary of the role?'
    },

    {
        type: 'list',
        name: 'newRoleDepartment',
        message: 'Which department does the role belong to?',
        choices: async () => {
            const [result] = await db.findAllDepartments(); // await function call
            // create new array for every department
            const selection = result.map(item => {
                return {
                    value: item.id,
                    name: item.name
                };
            });
            return selection;
        },
    },
];

// questions to add new employee 
const employeeQuestions = [
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
        type: 'list',
        name: 'employeeRole',
        message: "What is the employee's role?",
        choices: async () => {
            const [result] = await db.findAllRoles();
            // create new array for every role
            const selection = result.map(item => {
                return {
                    value: item.id,
                    name: item.title
                };
            });
            return selection;
        },
    },

    {
        type: 'list',
        name: 'manager',
        message: "Who's the employee's manager?",
        choices: async () => {
            const [result] = await db.findAllEmployees();
            // presents only employess who are managers
            const filter = result.filter(item => {
                return item.manager == null;
            });
            // create new array for every employee
            const selection = filter.map(item => {
                return {
                    value: item.id,
                    name: item.first_name + " " + item.last_name
                };
            });
            return selection;
        },
    },
];

// questions to update role
const updateRoleQuestions = [
    {
        type: 'list',
        name: 'emUpdate',
        message: "Which employee's role do you want to update?",
        choices: async () => {
            const [result] = await db.findAllEmployees();
            // create new array for every employee
            const selection = result.map(item => {
                return {
                    value: item.id,
                    name: item.first_name + " " + item.last_name
                };
            });
            return selection;
        },
    },

    {
        type: 'list',
        name: 'emRoleUpdate',
        message: "Which role do you want to assign the selected employee?",
        choices: async () => {
            const [result] = await db.findAllRoles();
            // create new array for every role
            const selection = result.map(item => {
                return {
                    value: item.id,
                    name: item.title
                };
            });
            return selection;
        },
    },
];

// export main menu and questions
module.exports = { mainMenu, departmentQuestions, roleQuestions, employeeQuestions, updateRoleQuestions };