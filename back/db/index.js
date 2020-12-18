const Sequelize = require("sequelize");
const db = new Sequelize('postgres://localhost:5432/omdb', {
    logging: false, 
    operatorsAliases: Sequelize.Op,
  })
module.exports = db;