const usuariosModel = require('../models/usuariosModel');

// READ
async function getAll(req, res) {
    usuariosModel.getAll()
        .then((result) => {
            const [row] = result;
            return res.status(200).json(row);
        })
        .catch(() => {
            return res.status(500).json({ message: 'Ocorreu um erro interno ao buscar' });
        });
}

// CREATE
// * melhorar a tratativa de erro *
async function createUsuario(req, res) {
    const { nickname, senha } = req.body;

    if (!nickname || !senha) {
        return res.status(400).json({ message: 'Usuario e senha nao podem ser vazios' });
    }

    const loginID = await usuariosModel.create(nickname, senha);
    return res.status(201).json({ message: 'Login criado com sucesso.', loginID });
}

// DELETE
function deleteUsuario(req, res) {
    const { id } = req.params;

    usuariosModel.deleteLogin(id)
        .then(() => {
            return res.status(200).json({ message: 'Login deletado com sucesso' });
        })
        .catch((err) => {
            return res.status(500).json({ message: 'Ocorreu um erro ao deletar login' });
        });
}

// UPDATE
function editUsuario(req, res) {
    const { nickname, senha } = req.body;
    const { id } = req.params;

    usuariosModel.update(nickname, senha, id)
        .then(() => {
            return res.status(200).json({ message: 'Dados atualizados com sucesso' });
        })
        .catch(() => {
            return res.status(500).json({ erro: 'Occorreu um erro ao atualizar login' });
        });

}

module.exports = {
    getAll,
    createUsuario,
    deleteUsuario,
    editUsuario
}