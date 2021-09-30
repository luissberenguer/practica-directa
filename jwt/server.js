const express = require('express');
const app = express();
const getToken = require('./jwt')

app.use(express.json())

app.use('*',(req, res, next) => {
    console.log(req);
    res.json(getToken())
})

app.listen(3001, () => {
    console.log('Servidor escuchando en el puerto: 3001')
})