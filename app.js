const express = require('express')
const app = express()
const router = require('./routes/router')
require('./connectionDB')
const configDB = require('./config')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(router)

app.listen(configDB.port, () => {
  console.log(`API REST en http://localhost:${configDB.port}/`);
});