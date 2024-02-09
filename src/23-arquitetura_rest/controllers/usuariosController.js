const db = require('../../db/conexao');
const usuariosModel = require('../models/usuariosModel');

// READ
const getAll = async(req, res) => {
    const [row] = await usuariosModel.getAll();
    return res.json(row);
}

// CREATE
const createUsuario = async(req, res) => {
    const { nickname, senha } = req.body;

    const loginID = await usuariosModel.create(nickname, senha);
    return res.status(201).json({
        message: "Login criado com sucesso.",
        loginID
    });
}

// DELETE
const deleteUsuario = (req, res) => {
    const { id } = req.params;

    usuariosModel.deleteLogin(id)
        .then(() => res.status(200).json({ message: "Usuario deletado com sucesso" }))
        .catch((err) => res.status(500).json({ message: err }))
    // return res.status(200).json({ message: "Usuario deletado com sucesso" });
}

// UPDATE
const editUsuario = async(req, res) => {
    const { nickname, senha } = req.body;
    const { id } = req.params;

    await usuariosModel.update(nickname, senha, id);
    return res.status(204);
}

module.exports = {
    getAll,
    createUsuario,
    deleteUsuario,
    editUsuario
}