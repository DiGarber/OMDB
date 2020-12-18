const S = require("sequelize");
const db = require("../db");
const User = require("./user");


class Favourite extends S.Model {}
Favourite.init(
  {
    Title: {
      type: S.STRING,
      allowNull: false,
    },
    Year:{
        type: S.STRING,
        allowNull:false
    },
    imdbID:{
        type: S.STRING,
        allowNull: false
    },
    Type:{
        type: S.STRING,
        allowNull: false
    },
    Poster: {
        type: S.TEXT,
        allowNull: false,
    },
  },
  { sequelize: db, modelName: "favourite" } 
);

module.exports = Favourite