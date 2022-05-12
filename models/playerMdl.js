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
    },
    registerDate: {
      type: type.DATE,
      allowNull: false,
    }
  });
};