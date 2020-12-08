const mysql = require('mysql');
const inquirer = require('inquirer');
const consoletable = require('console.table');
const asciiartlogo = require('asciiart-logo');
const prompts = require('./prompts.js');
const connection = require('./functions');


// console.log(connection);


prompts.startup()
    .then(data => {
        console.log(data);
        if (data.startup === 'View departments') {
            connection.viewDepartment()
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error)
                });
            ;

            prompts.startup();
        };
        if (data.startup === 'View roles') {
            connection.viewRoles()
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error)
                });
            ;

            prompts.startup();
        };
        if (data.startup === 'View employees') {
            connection.viewEmployees()
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    console.log(error)
                });
            ;
        };
        prompts.startup();
        if (data.startup === 'Add department') {
            prompts.addDepartment();
            //INSERT INTO department FUNCTION
            //display roles function
            prompts.startup();
        };
        if (data.startup === 'Add role') {
            prompts.addRole().then(answers => {
                console.log(answers);
                //INSERT INTO role FUNCTION
                //display roles function
                prompts.startup();
            })

        };
        if (data.startup === 'Add employee') {
            prompts.addEmployee();
            //INSERT INTO employee FUNCTION
            //display employee function
            prompts.startup();
        };
        if (data.startup === 'Update employee roles') {
            prompts.updateRole();
            //
            //display employee function
            prompts.startup();
        };
    });



