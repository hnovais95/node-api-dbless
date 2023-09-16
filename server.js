const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./api')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router)

app.listen(3000, () => {
    console.log('Servidor iniciado em http://localhost:3000')
})
