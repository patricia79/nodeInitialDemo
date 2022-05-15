const Player = sequelize.define("Player", {
  idPlayer: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  namePlayer: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  registerDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  winningAverage: { // promedio ganados
    type: Sequelize.DECIMAL(10, 2),
    defaultValue: 0,
  },
  score: { // total ganados
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },

  totalGames: { // total jugados
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = {
  Player 
}
