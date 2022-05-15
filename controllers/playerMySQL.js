const Player = require("../models/playerMdl");


//TODO POST /players: crea un jugador/ addPlayer

const addPlayer = async(req, res) => {
    try {
   let name = req.body;
   name? true : name = uniqid('ANONYMOUS-')
   const playerCreated = await Player.create({name})
   res.status(200).json({message:`${playerCreated} created successfully!! Congratulations!!!`})// Jugador creat`})}
    } catch { if (!req.body) {
       res.status(400).json({ message: "Bad request" });//"??????
    }}}

//TODO PUT /players: modifica el nom del jugador

    const updatePlayer = async(req, res) =>{
    
            let idPlayer = req.params.idPlayer
            let update = req.body
            try {
                await Player.findByIdAndUpdate(idPlayer, update , (err, playerUpdated) => {
                   res.status(200).json({ product: playerUpdated});
                  })
        } catch {  if (err) { res.status(500).json({message: `Error updating player: ${err}`})}
        }}
        
    //TODO GET /players: retorna el llistat de tots els jugadors del sistema amb el seu percentatge mig d’èxits /getAllPlayers

        const getAllPlayers = async(req, res) => {
            const players = await Player.findAll({ attributes:['idPlayer','namePlayer','winningAverage']})
             res.status(200).json({ players })
          }
          


module.exports = {addPlayer, updatePlayer, getAllPlayers}