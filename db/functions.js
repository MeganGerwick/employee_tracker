const { createConnection } = require("net");

const connection = require('./connection');

class DB {
    connection.connect(function(err) {
        if (err) throw err;
        console.log('connected as id' + connection.threadId);
    });
};

module.exports = new DB(connection); 