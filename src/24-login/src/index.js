const express = require('express')
const app = express()

const db = require('../../db/conexao')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// LOGIN

app.post('/login', (req, res) => {
    const { nickname, senha } = req.body

    // Verificando se o formulário não está vazio
    if (!nickname)
        res.status(400).json({ message: "Nickname não pode ser vazio", erro: true })

    if (!senha)
        res.status(400).json({ message: "Senha não pode ser vazio.", erro: true })

    // Verificando as credenciais no DB
    db.query(
        `SELECT * FROM logins WHERE nickname = '${nickname}' AND senha = '${senha}'`,
        (err, results) => {
            if (err)
                res.status(500).json({ message: "Falha interna no servidor", erro: true })
            if (results.length > 0) 
                res.status(200).json({ message: "Login efetuado com sucesso", erro: false })

            res.status(401).json({ message: "Login não encontrado", erro: true })
        }
    )
})

app.listen(3022);