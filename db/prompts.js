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
    ])

//View departments
const startup = () =>
    inquirer.prompt([
        {
            type: '',
            name: '',
            message: '',
        },
    ])

//View Roles
const startup = () =>
    inquirer.prompt([
        {
            type: '',
            name: '',
            message: '',
        },
    ])

//View Employees
const startup = () =>
    inquirer.prompt([
        {
            type: '',
            name: '',
            message: '',
        },
    ])

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