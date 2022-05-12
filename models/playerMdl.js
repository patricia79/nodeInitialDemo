module.exports = (sequelize, type) => {
  return sequelize.define("Player", {
    idPlayer: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    namePlayer: type.STRING,
    registerDate: type.DATE,
  });
};