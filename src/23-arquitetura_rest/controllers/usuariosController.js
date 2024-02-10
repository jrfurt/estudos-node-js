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
}

// UPDATE
const editUsuario = (req, res) => {
    const { nickname, senha } = req.body;
    const { id } = req.params;

    usuariosModel.update(nickname, senha, id)
        .then(() => {
            return res.status(200).json({ message: "Dados atualizados com sucesso" })
        }) 
        .catch(() => {
            return res.status(500).json({ erro: "Occorreu um erro ao atualizar login" })
        })
    
}

module.exports = {
    getAll,
    createUsuario,
    deleteUsuario,
    editUsuario
}