const db = require('./db/db');

const mainMenu = [
    {
        type: 'list',
        name: 'task',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
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
                }

            })
            console.log(selection);
            return selection;
        }
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
        name: 'employee-role',
        message: "What is the employee's role?",
        choices: ['Account Manager', 'Legal Lead', 'Sales Lead', 'Lawyer', 'Software Engineer', 'Legal Team Lead', 'Sales Person', 'Accountant',]
    },

    {
        type: 'list',
        name: 'manager',
        message: "Who's the employee's manager?",
        choices: ['John Doe', 'Philip Gbeho', 'Tom Allen', 'Walter Whyte']
    },
];

const updateRoleQuestions = [
    {
        type: 'list',
        name: 'update',
        message: "Which employee's role do you want to update?",
        choices: ['John Doe', 'Mike Chan', 'Philip Gbeho', 'Sara Poppin', 'Tom Allen', 'Josh Grey', 'Walter Whyte', 'Tom Brown']
    },

    {
        type: 'list',
        name: 'update',
        message: "Which role do you want to assign the selected employee?",
        choices: ['Account Manager', 'Lead', 'Sales Lead', 'Lawyer', 'Software Engineer', 'Legal Team Lead', 'Sales Person', 'Accountant',]
    },
];

module.exports = { mainMenu, departmentQuestions, roleQuestions, employeeQuestions, updateRoleQuestions };