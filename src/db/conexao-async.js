const mysql = require('mysql2/promise');

const asyncConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '1997',
    database: 'mais1code'
});


module.exports = asyncConnection;