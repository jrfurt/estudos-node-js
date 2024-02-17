import mysql from 'mysql2'

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1997',
    database: 'mais1code'
})

export default conexao