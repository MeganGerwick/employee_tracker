//write prompts for different choices

const inquirer = require("inquirer");


//Startup prompts
const startup = () =>
    inquirer.prompt([
        {
            type: 'list',
            name: 'startup',
            message: 'What would you like to do?',
            choices: ['View departments', 'View roles', 'View employees', 'Add department', 'Add role', 'Add employee', "Update employee roles"],
        },
    ]);



//Add departments
const addDepartment = () =>
    inquirer.prompt([
        {
            type: 'Input',
            name: 'name',
            message: 'What is the name of the department?',
        },
    ]);

//Add Roles
const addRole = () =>
    inquirer.prompt([
        {
            type: 'Input',
            name: 'name',
            message: 'What is the name of the role?',
        },
        {
            type: 'Input',
            name: 'salary',
            message: 'What is the salary of the role?',
        },
        {
            type: 'Input',
            name: 'department',
            message: 'What department is the role in?',
        },
    ]);

//Add Employees
const addEmployee = () =>
    inquirer.prompt([
        {
            type: 'Input',
            name: 'first name',
            message: 'What is their first name?',
        },
        {
            type: 'Input',
            name: 'last name',
            message: 'What is their last name?',
        },
        {
            type: 'Input',
            name: 'role',
            message: 'What is their role?',
        },
    ]);

//Update employee roles 
const updateRole = () =>
    inquirer.prompt([
        {
            type: 'list',
            name: 'role select',
            message: 'Which employee do you want to update?',
            choices: ['']
        },
    ]);

// //View departments
// const viewDepartments = () =>
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'viewDepartment',
//             message: 'Which department would you like to view?',
//             choices: ['Sales', 'Finance', 'Customer Service', 'Manufacturing'],
//         },
//     ]);

// //View Roles
// const viewroles = () =>
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'roles',
//             message: 'Which role would you like to view?',
//             choices: ['Sales leads', 'Sales person', 'Accountant', 'Engineer', 'Software Developer', 'Customer service rep']
//         },
//     ]);

// //View Employees
// const viewemployees = () =>
//     inquirer.prompt([
//         {
//             type: 'list',
//             name: 'which',
//             message: '',
//         },
//     ]);


module.exports = prompts;