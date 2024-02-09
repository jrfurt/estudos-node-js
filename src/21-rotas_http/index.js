// O módulo express cria o servidor, sem necessidade de usar a função .createServer
const express = require('express');
const app = express();

const db = require('../db/conexao');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CRUD

// READ
app.get('/logins', function(req, res) {
    // Consulta simples
    db.query( // O método QUERY pode executar diversos tipos de ações no BANCO DE DADOS
        `SELECT * FROM logins`,
        (err, results) => {
            if (err) 
                res.json({ erro: err });
            else 
                res.json({ usuarios: results });
        }
    )
});

// CREATE
app.post('/logins', (req, res) => {
    const { nickname, senha } = req.body;

    db.query(
        `INSERT INTO logins
            (nickname, senha)
        VALUES
            ('${nickname}', '${senha}')`,
        (err, results) => {
            if (err)
                res.json({ erro: err });
            else
                res.json({ message: "Usuário criado com sucesso" });
        }
    )
});

// DELETE
app.delete('/logins/:id', (req, res) => {
    const { id } = req.params;

    db.query(`
        DELETE FROM logins 
        WHERE id = '${id}'`,
        (err, results) => {
            if (err)
                res.json({ erro: err });
            else
                res.json({ message: "Usuário deletado com sucesso" });
        }
    )
});

// UPDATE
app.put('/logins/:id', (req, res) => {
    const { id } = req.params;
    const { nickname, senha } = req.body;

    db.query(`
        UPDATE logins 
        SET nickname = '${nickname}', senha = '${senha}'
        WHERE id = '${id}'`,
        (err, results) => {
            if (err)
                res.json({ erro: err });
            else
                res.json({ message: "Usuário atualizado com sucesso" });
        }
    )
});

app.listen(3021);