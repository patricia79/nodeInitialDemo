/*

//TODO GET /players: mostra un jugador creat / Player

const playersGet = (req, res) => {
    try {
      if (!req.body.name) {
        res.status(400).json({ message: "Bad request" });
      } else {
        let player0 = new Player();
        player0.name = req.body.name;
      res.status(200).json({message:`${player0.name}, register_date: new Date`});
    }
  }
  catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  }


//TODO PUT /players: modifica el nom del jugador

function updatePlayer (req, res) {
  let playerId = req.params.playerId
  let update = req.body
  Player.findByIdAndUpdate(playerId, update , (err, playerUpdated) => {
    if (err) { res.status(500).json({message: `Error updating player: ${err}`})}
    res.status(200).json({ product: playerUpdated});
  })
}



// TODO GET /players: retorna el llistat de tots els jugadors

module.exports = {
  addPlayer, updatePlayer
 }


 function getProduct (req, res) {
  let productId = req.params.productId

  Product.findById(productId, (err, product) => {
  try { res.status(200).json({product: product})} //devuelve un json con un producto 
   catch { if (err) {return res.status(500).json({message:`error when making the request ${err}`})} 
   if(!productId) {return res.status(404).json({message: `the product doesn't exist`})}}
   })
}

getProducts (req, res) {
  Product.find({}, (err, products) => {
      if (err) {return res.status(500).json({message:`error when making the request ${err}`})}
      if(!products) {return res.status(404).json({message: `the products do not exist`})}
    })
    res.status(200).json({ products: []})
}

function saveProduct(req, res) {
  try {
      console.log('POST /api/product');
      console.log(req.body);

      let product0 = new Product()

      product0.name = req.body.name
      product0.price = req.body.price
      product0.picture = req.body.picture
      product0.category = req.body.category
      product0.description = req.body.description

product0.save((err, productStored) => {

  if (err) { res.status(500).json({message: `Error saving to database: ${err}`})
  res.status(200).send({product0: productStored})
}})} catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }

}

function updateProduct (req, res) {
  let productId = req.params.productId
  let update = req.body
  Product.findByIdAndUpdate(productId, update , (err, productUpdated) => {
    if (err) { res.status(500).json({message: `Error updating product: ${err}`})}
    res.status(200).json({ product: productUpdated});
  })
}

function deleteProduct (req, res) {
  let productId = req.params.productId
  Product.findById(productId, (err, product) => {
    if (err) { res.status(500).json({message: `Error deleting product: ${err}`})}
    product.remove(err => {
      if (err) { res.status(500).json({message: `Error deleting product: ${err}`})}
      res.status(200).json({message: 'the product has been successfully removed'});
    })
})
}


const 
  Sequelize = require('sequelize'),
  {sequelize} = require('../MySQLPersistence/db'),
  {Player, Roll} = require('../MySQLPersistence/db'),
  uniqid = require('uniqid'),
  rollDices = require('../logicaDaus/daus')

const addNewPlayer = async(req, res) => {
  try {
    let { name } = req.body
    name? true : name = uniqid('ANONIM-')
    const playerStored = await Player.create({name})
    res.status(201).send({player: playerStored})
  } catch (e){
    res.status(500).send({message: e.message})
  }
}

const modifyPlayerName = async(req, res) =>{
  const id = req.params.id
  const { name } = req.body
  try{
    await Player.update({name},{where:{id: id}})
    const player = await Player.findAll({
      where:{
        id:id
      }
    })
    res.status(200).send({player})
  } catch (e){
    res.status(404).message({message: 'player not found'})
  }
}

const getAllPlayers = async(req, res) => {
  const players = await Player.findAll({ attributes:['id','name','winRate'],
    include:[Roll]
  })
   res.status(200).send({ players })
}

const playerRollDices = async(req, res) => {
  const PlayerId = req.params.id
  const {
    diceA,
    diceB,
    rollScore,
    veredict
  } = rollDices()
  let win
  try{
    const roll = await Roll.create({
      diceA,
      diceB,
      rollScore,
      veredict,
      PlayerId,
    })
    if(veredict==='win')await Player.increment(['totalGames','totalWins'],{where:{id:PlayerId}})
    if(veredict==='lose')await Player.increment('totalGames',{where:{id:PlayerId}})
    const player = await Player.findAll({attributes:['totalGames','totalWins'],where:{id:PlayerId}})
    const { totalGames, totalWins } =player[0].dataValues
    const winRate = (totalWins/totalGames)*100
    await Player.update({winRate},{where:{id:PlayerId}})
    const playerRolled = await Player.findAll({attributes:['name'], where:{id:PlayerId}})
    res.status(200).send({playerRolled, roll})
  } catch (e) {
    res.status(500).send({message:e.message})
  }
}

const deleteGames = async(req, res) => {
  const id = req.params.id
  try {
    await Roll.destroy({where:{PlayerId:id}})
    await Player.update({
      totalGames:0,
      totalWins:0,
      winRate:0
    },{where:{id:id}})
    const player = await Player.findAll({where:{id:id}})
    res.status(200).send({player})
  } catch (e){
    res.status(500).send({message: e.message})
  }
}

const playerGamesList = async(req, res) => {
  const id = req.params.id
  try{
    const player = await Player.findAll(
      {
      attributes:['id','name'],
      where:{id:id},include:[Roll]
    })
    res.status(200).send(player)
  } catch (e) {
    res.status(404).send({message:'player not found'})
  }
}


const generalRanking = async(req, res) => {
  try {
    const totalPlayers = await Player.count()
    const sumWinRate = await Player.sum('winRate')
    const generalWinRate = sumWinRate/totalPlayers
    res.status(200).send({generalWinRate})
  } catch(e){
    res.status(500).send({message:e.message})
  }
}

const getBetterPlayer = async(req, res) => {
  const betterWinRate = await Player.max('winRate')
    try {
    const player = await Player.findAll({where:{winRate:betterWinRate}})
    res.status(200).send({ player })
  } catch (e) {
    res.status(500).send({message:e.message})
  }
}

const getWorstPlayer = async(req, res) => {
  const worstWinRate = await Player.min('winRate')
  try {
    const player = await Player.findAll({where:{winRate:worstWinRate}})
    res.status(200).send({ player })
  } catch (e) {
    res.status(500).send({message:e.message})
  }
}

module.exports = {
  addNewPlayer,
  modifyPlayerName,
  getAllPlayers,
  playerRollDices,
  deleteGames,
  playerGamesList,
  generalRanking,
  getBetterPlayer,
  getWorstPlayer
}*/