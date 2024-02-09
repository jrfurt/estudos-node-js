// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1997',
    database: 'mais1code',
});

connection.connect(function(err) {
    if (err)
        console.log('Erro: ', err)
    else    
        console.log('Conectou de boas!'); 
});

module.exports = connection;