const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res)=> res.send('Olá mundo pelo express') )

app.listen(port, () => console.log('app rodando na porta 3000'))