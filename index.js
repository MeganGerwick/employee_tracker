const mysql = require('mysql');
const inquirer = require('inquirer');
const consoletable = require('console.table');
const asciiartlogo = require('asciiart-logo');
const prompts = require('./prompts.js');
const funct = require('./functions');
const connection = require('./db/connection');


prompts.startup()
    .then(data => {
        console.log(data);
        if (data.startup === 'View departments') {
            funct.viewDepartment()
                .then(data => {
                    console.table(data);
                })
                .catch(error => {
                    console.log(error)
                });
            ;
        };


        if (data.startup === 'View roles') {
            funct.viewRoles()
                .then(data => {
                    console.table(data);
                })
                .catch(error => {
                    console.log(error)
                });
            ;
        };
        if (data.startup === 'View employees') {
            funct.viewEmployees()
                .then(data => {
                    console.table(data);
                })
                .catch(error => {
                    console.log(error)
                });
            prompts.startup();

        };

        if (data.startup === 'Add department') {
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
                            prompts.startup();
                        }
                    );

                });
            ;
        };

        if (data.startup === 'Add role') {
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
                            prompts.startup();
                        }
                    );

                });
            ;
        };
        if (data.startup === 'Add employee') {
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
                            console.log('Role added!');
                            prompts.startup();
                        }
                    );

                });
            ;
        };
        if (data.startup === 'Update employee roles') {
            prompts.updateRole();
            //
            //display employee function
            prompts.startup();
        };
    });

;


