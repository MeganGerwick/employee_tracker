const { createConnection } = require("net");

const connection = require('./connection');

class DB {
    connection.connect(function(err) {
        if (err) throw err;
        console.log('connected as id' + connection.threadId);
    });
};

//View table of department function

//View table of roles function

//View table of employees function

//Insert into department function

//Insert into employee function

//Insert into roles function

module.exports = new DB(connection); 