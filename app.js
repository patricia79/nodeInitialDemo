const
express = require('express'),
app = express(),
jocAPI = require('./routes/router')
require('./connectionDB')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(jocAPI)
app.listen(8888, ()=>{
  console.log('server running on port 8888')
})