const db = require('./db/db');

const mainMenu = [
    {
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit']
    },
];

const departmentQuestions = [
    {
        type: 'input',
        name: 'department',
        message: 'What is the name of the department you want to add?'
    },
];

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
            const [result] = await db.findAllDepartments();
            console.log(result);
            const selection = result.map(item => {
                return{
                    value: item.id, 
                    name: item.name
                };

            });
            console.log(selection);
            return selection;
        },
    },
];

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
            console.log(result);
            const selection = result.map(item => {
                return{
                    value: item.id, 
                    name: item.title
                };
            });
            console.log(selection);
            return selection;
        },
    },

    {
        type: 'list',
        name: 'manager',
        message: "Who's the employee's manager?",
        choices: async () => {
            const [result] = await db.findAllEmployees();
            console.log(result);
            const filter = result.filter(item => {
                return item.manager == null;
            });
            const selection = filter.map(item => {
                return{
                    value: item.id, 
                    name: item.first_name + " " + item.last_name
                };
            });
            console.log(selection);
            return selection;
        },
    },
];

const updateRoleQuestions = [
    {
        type: 'list',
        name: 'emUpdate',
        message: "Which employee's role do you want to update?",
        choices: async () => {
            const [result] = await db.findAllEmployees();
            console.log(result);
            const selection = result.map(item => {
                return{
                    value: item.id, 
                    name: item.first_name + " " + item.last_name
                };
            });
            console.log(selection);
            return selection;
        },
    },

    {
        type: 'list',
        name: 'emRoleUpdate',
        message: "Which role do you want to assign the selected employee?",
        choices: async () => {
            const [result] = await db.findAllRoles();
            console.log(result);
            const selection = result.map(item => {
                return{
                    value: item.id, 
                    name: item.title
                };
            });
            console.log(selection);
            return selection;
        },
    },
];

module.exports = { mainMenu, departmentQuestions, roleQuestions, employeeQuestions, updateRoleQuestions };