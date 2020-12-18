const S = require("sequelize");
const db = require("../db");
const { hash, genSalt } = require("bcrypt");
//const Favourite = require("./favourites")

class User extends S.Model {
  hashPassword(password) {
    return hash(password, this.salt);
  }
}

User.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    lastName: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: S.STRING,
      required: true,
      validate: {
        notEmpty: true,
      },
    },
    salt: {
      type: S.STRING,
    },
  },
  { sequelize: db, modelName: "user" }
);

User.beforeCreate((user) => {
  return genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return hash(user.password, user.salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

//User.hasMany(Favourite)


module.exports = User;