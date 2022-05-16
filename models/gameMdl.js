module.exports = (sequelize, type) => {
  return sequelize.define("Game", { 
    idGame: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    dice1: {
      type: type.INTEGER,
      allowNull: false,
    },
    dice2: {
      type: type.INTEGER,
      allowNull: false,
    },
    result1: {
      type: type.INTEGER,
      allowNull: false,
    },
    result_S: {
      type: type.STRING,
      allowNull: false,
    },
    ranking: {
      type: type.INTEGER,
      allowNull: false,
    },
  });
};
