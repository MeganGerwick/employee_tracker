//write prompts for different choices

const inquirer = require("inquirer");


//Startup prompts
const startup = () =>
    inquirer.prompt([
        {
            type: 'list',
            name: 'startup',
            message: 'What would you like to do?',
            choices: ['View departments', 'View roles', 'View employees', 'Add dpartments', 'Add roles', 'Add employees', "Update employee roles"],
        },
    ]);

//View departments
const viewDepartments = () =>
    inquirer.prompt([
        {
            type: 'list',
            name: 'viewDepartment',
            message: 'Which department would you like to view?',
            choices: ['Sales', 'Finance', 'Customer Service', 'Manufacturing'],
        },
    ]);

//View Roles
const viewroles = () =>
    inquirer.prompt([
        {
            type: 'list',
            name: 'roles',
            message: 'Which role would you like to view?',
            choices: ['Sales leads', 'Sales persons', 'Accountant', 'Engineer', 'Software Developer']
        },
    ]);

//View Employees
const viewemployees = () =>
    inquirer.prompt([
        {
            type: '',
            name: '',
            message: '',
        },
    ]);

//Add departments
const startup = () =>
    inquirer.prompt([
        {
            type: '',
            name: '',
            message: '',
        },
    ])

//Add Roles
const startup = () =>
    inquirer.prompt([
        {
            type: '',
            name: '',
            message: '',
        },
    ])

//Add Employees
const startup = () =>
    inquirer.prompt([
        {
            type: '',
            name: '',
            message: '',
        },
    ])

//Update employee roles 
const startup = () =>
    inquirer.prompt([
        {
            type: '',
            name: '',
            message: '',
        },
    ])
module.exports = prompts;