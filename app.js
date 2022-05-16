const express = require('express')
const app = express()
const jocAPI = require('./routes/router')
require('./connectionDB')
const configDB = require('./config')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(jocAPI)

app.listen(configDB.port, () => {
  console.log(`API REST en http://localhost:${configDB.port}/`);
});