const express = require('express');
const router = express.Router();

const usuariosController = require('./controllers/usuariosController');

// READ
router.get('/logins', usuariosController.getAll);

// CREATE
router.post('/logins', usuariosController.createUsuario);

// DELETE
router.delete('/logins/:id', usuariosController.deleteUsuario);

// UPDATE
router.put('/logins/:id', usuariosController.editUsuario);

module.exports = router;