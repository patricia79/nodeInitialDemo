module.exports = (sequelize, type) => {
  return sequelize.define("Player", {
    idPlayer: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    namePlayer: {
      type: type.STRING,
      allowNull: false,
      unique: true,
    },

    registerDate: {
      type: type.DATE,
      allowNull: false,
    },

    winRatio: {
      // promedio ganados
      type: type.DECIMAL(10, 2),
      defaultValue: 0,
    },

    score: {
      // total ganados
      type: type.INTEGER,
      defaultValue: 0,
    },
    totalPlayed: {
      // total jugados
      type: type.INTEGER,
      defaultValue: 0,
    },
     timestamps: false,
    }
   )}
