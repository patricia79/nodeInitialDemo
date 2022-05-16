const {Player, Roll} = require('../MySQLPersistence/db'),
uniqid = require('uniqid'),
throwFunc = require('../dicesLogic/dices')

//TODO POST  crea un jugador 

const addPlayer = async(req, res) => {
  try {
    let { name } = req.body
    name? true : name = uniqid('ANONIM-')
    const playerCreated = await Player.create({name})
    res.status(201).json({player: playerCreated})
  } catch (err){
    res.status(500).json({message: err.message})
  }
}

//TODO PUT  modifica el nom del jugador

const updatePlayer = async(req, res) =>{
  const id = req.params.id
  const { name } = req.body
  try{
    await Player.update({name},{where:{id: id}})
    const player = await Player.findAll({
      where:{
        id:id
      }
    })
    res.status(200).json({player})
  } catch (err){
    res.status(404).json ({message: 'NOT PLAYER'})
  }
}


//TODO GET : retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits

const getAllPlayers = async(req, res) => {
  const players = await Player.findAll({ attributes:['id','name','winRate'],
    include:[Roll]
  })
   res.status(200).json({ players })
}

//TODO  POST /players/{id}/games: un jugador específic realitza una tirada

const playerRollDices = async(req, res) => {
  const PlayerId = req.params.id
  const {
    dice1,
    dice2,
    result,
    result_S
  } = throwFunc()

  try{
    const roll = await Roll.create({
      dice1,
      dice2,
      result,
      result_S,
      PlayerId,
    })
    let arr = []
    if(result_S==='win')await Player.increment(['totalGames','totalWins'],{where:{id:PlayerId}})
    if(result_S==='lose')await Player.increment('totalGames',{where:{id:PlayerId}})
    const player = await Player.findAll({attributes:['totalGames','totalWins'],where:{id:PlayerId}})
    arr.push(player)
    const { totalGames, totalWins } = arr[0][0].dataValues
    const winRate = (totalWins/totalGames)*100
    await Player.update({winRate},{where:{id:PlayerId}})
    const playerRolled = await Player.findAll({attributes:['name'], where:{id:PlayerId}})
    res.status(200).json({playerRolled, roll})
  } catch (err) {
    res.status(500).json({message:err.message})
  }
}


 // TODO DELETE /players/{id}/games: elimina les tirades del jugador

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
    res.status(200).json({player})
  } catch (err){
    res.status(500).json({message: err.message})
  }
}

//TODO GET /players/{id}/games: retorna el llistat de jugades per un jugador

const playerGamesList = async(req, res) => {
  const id = req.params.id
  try{
    const player = await Player.findAll(
      {
      attributes:['id','name'],
      where:{id:id},include:[Roll]
    })
    res.status(200).json(player)
  } catch (err) {
    res.status(404).json({message:'player not found'})
  }
}

//TODO GET : retorna el percentatge mig d’èxits del conjunt de tots els jugadors

const generalRanking = async(req, res) => {
  try {
    const totalPlayers = await Player.count()
    const sumWinRate = await Player.sum('winRate')
    const generalWinRate = sumWinRate/totalPlayers
    res.status(200).json({generalWinRate})
  } catch(err){
    res.status(500).json({message:err.message})
  }
}


// TODO GET : retorna el jugador amb millor percentatge d’èxit

const betterPlayer = async(req, res) => {
  const betterWinRate = await Player.max('winRate')
  console.log(betterWinRate)
  try {
    const player = await Player.findAll({where:{winRate:betterWinRate}})
    res.status(200).json({ player })
  } catch (err) {
    res.status(500).json({message:err.message})
  }
}

//TODO GET : retorna el jugador amb pitjor percentatge d’èxit

const worstPlayer = async(req, res) => {
  const worstWinRate = await Player.min('winRate')
  console.log(worstWinRate)
  try {
    const player = await Player.findAll({where:{winRate:worstWinRate}})
    res.status(200).json({ player })
  } catch (err) {
    res.status(500).json({message:err.message})
  }
}

module.exports = {
  addPlayer,
  updatePlayer,
  getAllPlayers,
  playerRollDices,
  deleteGames,
  playerGamesList,
  generalRanking,
  betterPlayer,
  worstPlayer
}