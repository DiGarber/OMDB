const express = require("express");
const app = express();


const path = require("path");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const PassportLocal = require("passport-local").Strategy;
const db = require("./db");
const backRouter = require("./routes/backRoutes");
//const favsRouter = require("./routes/favRoutes")
const User = require("./models/user");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(session({ secret: "omdb", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new PassportLocal({ usernameField: "email" }, (email, password, done) => {
    User.findOne({ where: { email } })
      .then((user) => {
        if (!user) return done(null, false);
        user.hashPassword(password).then((hashed) => {
          if (user.password !== hashed) return done(null, false);
          return done(null, user);
        });
      })
      .catch(done);
  })
);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch(done);
});

app.use("/api", backRouter);
//app.use("/favs", favsRouter)
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

db.sync({ force: false }).then(() => {
  app.listen(8080, (req, res) => {
    console.log("Listening on port 8080");
  });
});
