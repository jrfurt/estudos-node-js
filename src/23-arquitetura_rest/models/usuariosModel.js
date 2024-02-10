const db = require('../../db/conexao-async');

function getAll() {
    return db.execute('SELECT * FROM logins');
} 

async function create(nickname, senha) {
    const sql = "INSERT INTO logins (nickname, senha) VALUES (?, ?);";
    const values = [nickname, senha];
    const [{ insertId }] = await db.execute(sql, values);

    return insertId;
}

function deleteLogin(id) {
    const sql = "DELETE FROM logins WHERE id = ?;";
    return db.execute(sql, [id]);
}

function update(nickname, senha, id) {
    const sql = "UPDATE logins SET nickname = ?, senha = ? WHERE id = ?;";
    const values = [nickname, senha, id];
    return db.execute(sql, values);
}

module.exports = {
    getAll,
    create,
    deleteLogin,
    update
}