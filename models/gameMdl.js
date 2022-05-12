module.exports = (sequelize, type) => {
    return sequelize.define('Games', {
        idGames: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dice1: {
            type: type.INTEGER,
            allowNull: false,
          },
          dice2: {
            type: type.INTEGER,
            allowNull: false,
          },
          result: {
            type: type.INTEGER,
            allowNull: false,
          },
          ranking: {
            type: type.INTEGER,
            allowNull: false,
          }
       })}