const mysql = require('mysql');
const inquirer = require('inquirer');
const consoletable = require('console.table');
const asciiartlogo = require('asciiart-logo');
const prompts = require('./db/prompts.js');
const connection = require('./db/connection')

startup();
