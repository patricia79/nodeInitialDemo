const express = require('express')
const app = express()
require('./connectionDB')
const config_db = require('./config')

const router = express.Router()
const jocApi = express.Router()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)
app.use(jocApi)

app.listen(config_db.port, () => {
  console.log(`API REST en http://localhost:${config_db.port}/`);
});