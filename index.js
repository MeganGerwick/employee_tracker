const mysql = require('mysql');
const inquirer = require('inquirer');
const consoletable = require('console.table');
const asciiartlogo = require('asciiart-logo');
const prompts = require('./prompts.js');
const funct = require('./functions');
const connection = require('./db/connection');
const { viewRoles, viewEmployees } = require('./functions');

//FUNCTIONS

//View items functions

const startup = () => {
    prompts.startup()
        .then(data => {
            switch (data.startup) {
                case 'View departments':
                    departments();
                    break;
                case 'View roles':
                    roles();
                    break;
                case 'View employees':
                    employees();
                    break;
                case "Add department":
                    departmentAdd();
                    break;
                case "Add role":
                    roleAdd();
                    break;
                case "Add employee":
                    employeeAdd();
                    break;
                default:
                    console.log("Error");
            };
        });
    ;
};


const departments = () => {
    funct.viewDepartment()
        .then(data => {
            console.table(data);
        })
        .catch(error => {
            console.log(error)
        });
    ;
    startup();
};


const roles = () => {
    funct.viewRoles()
        .then(data => {
            console.table(data);
        })
        .catch(error => {
            console.log(error)
        });
    ;
    startup();
};

const employees = () => {
    funct.viewEmployees()
        .then(data => {
            console.table(data);
        })
        .catch(error => {
            console.log(error)
        });
    ;
    startup();
};

const departmentAdd = () => {
    prompts.addDepartment()
        .then(function (answer) {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    name: answer.name,
                },
                function (err) {
                    if (err) throw err;
                    console.log('Department added!');
                    startup();
                }
            );

        });

    ;
};

const roleAdd = () => {
    prompts.addRole()
        .then(function (answer) {
            connection.query(
                'INSERT INTO role SET ?',
                {
                    title: answer.name,
                    salary: answer.salary,
                    department: answer.department,
                },
                function (err) {
                    if (err) throw err;
                    console.log('Role added!');
                    startup();
                }
            );

        });
    ;
};

const employeeAdd = () => {
    prompts.addEmployee()
        .then(function (answer) {
            connection.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answer.firstname,
                    last_name: answer.lastname,
                    role: answer.role,
                },
                function (err) {
                    if (err) throw err;
                    console.log('Employee added!');

                    startup();
                }
            );

        });
    ;
};


startup();
