const
  { Player } = require('../MongoPersistence/db'),
  uniqid = require('uniqid'),
  rollDices = require('../logicaDaus/daus')

const addNewPlayer = async (req, res)=>{
  try{
    let { name } = req.body
    const data = new Date().toLocaleDateString()
    name? true: name = uniqid('ANONIM-')
    const player = Player({ name, data })
    const playerStored = await player.save()
    res.status(201).send({ player:playerStored })
  } catch(e){
    res.status(500).send({ message: e.message })
  }
}

const modifyPlayerName = async (req, res) =>{
  const id = req.params.id
  const { name } = req.body
  try{
    const player = await Player.findById({_id:id})
    player.name = name
    playerUpdated = await player.save()
    res.status(200).send({playerUpdated})
  } catch(e){
    res.status(500).send({message: e.message})
  }
}

const getAllPlayers = async ( req, res) =>{
  const players = await Player.find()
  const response = players.map(player => {
      const obj = {
        _id : player._id,
        player : player.name,
        winRate :  player.winRate
      }
    return obj
    }  )
  res.status(200).send({ players: response })
}

const playerRollDices = async( req, res )=>{
  const id = req.params.id
  const game = rollDices()
  try{
    const player = await Player.findById({_id:id})
    player.totalGames++
    if( game.veredict === 'win'){
      player.totalWins++
    }
    player.rolls.push(game)
    player.winRate = parseFloat(((player.totalWins / player.totalGames)*100).toFixed(2))
    await player.save()
    res.status(200).send({name:player.name , rolled:game})
  }catch(e){
    res.status(500).send({message: e.message})
  }
}

const deleteGames = async ( req ,res ) => {
  const id = req.params.id
  try {
    const player = await Player.findById({_id:id})
    player.totalGames = 0
    player.totalWins = 0
    player.winRate = 0
    player.rolls = []
    await player.save()
    res.status(200).send({message:'games removed successfully', player })
  } catch (e) {
    res.status(404).send({message:'player not found'})
  }
}