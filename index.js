const mysql = require('mysql');
const inquirer = require('inquirer');
const consoletable = require('console.table');
const asciiartlogo = require('asciiart-logo');
const prompts = require('./db/prompts.js');
const connection = require('./db/connection')

startup()
    .then(data => {
        console.log(data);
        if (data.startup === 'View departments') {
            //function to show table of departments;
            startup();
        };
        if (data.startup === 'View roles') {
            //function to show table of roles 
            startup();
        };
        if (data.startup === 'View employees') {
            //function to show table of employees
            startup();
        };
        if (data.startup === 'Add department') {
            addDepartment();
        };


    })



