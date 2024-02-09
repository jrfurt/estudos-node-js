const db = require('../../db/conexao-async');

const getAll = () => {
    const valor = db.execute(
        'SELECT * FROM logins'
        )
        .then((result) => result)
        .catch((err) => [])

    return valor;
} 

const create = async(nickname, senha) => {
    const [{ insertId }] = await db.execute(
        `INSERT INTO logins (nickname, senha) VALUES ('${nickname}', '${senha}')`
    );

    return insertId;
}

const deleteLogin = async(id) => {
    return await db.execute(
        `DELETE FROM logins WHERE id = '${id}'`
    );
}

const update = async(nickname, senha, id) => {
    const editar = await db.execute(
        `UPDATE logins SET nickname = ${nickname}, senha = ${senha} WHERE id = ${id}`
    );

    return editar;
}

module.exports = {
    getAll,
    create,
    deleteLogin,
    update
}