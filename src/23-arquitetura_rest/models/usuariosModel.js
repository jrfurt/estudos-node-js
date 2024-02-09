const db = require('../../db/conexao-async');

const getAll = () => {
    return db.execute('SELECT * FROM logins')
        .then((result) => result)
        .catch((err) => err)
} 

const create = async(nickname, senha) => {
    const sql = "INSERT INTO logins (nickname, senha) VALUES (?, ?);"
    const values = [nickname, senha]
    const [{ insertId }] = await db.execute(sql, values)

    return insertId
}

const deleteLogin = async(id) => {
    const sql = "DELETE FROM logins WHERE id = ?;"
    return await db.execute(sql, [id])
}

const update = async(nickname, senha, id) => {
    const sql = "UPDATE logins SET nickname = ?, senha = ? WHERE id = ?;"
    const values = [nickname, senha, id]
    return await db.execute(sql, values)
}

module.exports = {
    getAll,
    create,
    deleteLogin,
    update
}