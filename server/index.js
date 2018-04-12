const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const axios = require("axios");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
require("dotenv").config();

const {
  getUser,
  logout,
  updateProfile
} = require(`${__dirname}/Controllers/usersCtrl`);

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log(err));

const port = 3001;

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.use(cors());
app.use(json());

console.log(process.env.CONNECTION_STRING);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10000000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.DOMAIN,
      clientID: process.env.CLIENT_ID,
      scope: "openid profile",
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth"
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      app
        .get("db")
        .getUserByUserName(profile.id)
        .then(response => {
          // console.log(profile);
          if (!response[0]) {
            app
              .get("db")
              .addUserByUserName([profile.id, profile.nickname])
              .then(res => done(null, res[0]));
          } else {
            return done(null, response[0]);
          }
        });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get(
  "/auth",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/profile", //change this later
    failureRedirect: "/auth"
  })
);

// app.get('/api/me', (req, res, next) => {
// 	if (!req.user) {
// 		res.status(401).json( {message: 'Not logged in' });
// 	} else {
// 		res.status(200).json(req.user);
// 	}
// });

// app.get("/api/test", (req, res) => {
//   req.app
//     .get("db")
//     .getTestUser()
//     .then(response => {
//       console.log(response);
//     })
//     .catch(err => res.status(500).json(err));
// });

// dbInstance.getTestUser()
// .then(response => console.log(response))
// .catch(() => res.status(500).send())

// app.get("/api/test", (req, res, next) => {
//   res.json({ message: "Success" });
// });

app.get("/logout", logout);
app.get("/api/me", getUser);
app.put("/updatingProfile", updateProfile);

const path = require("path");
app.get("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/../build/index.html"));
});

app.listen(port, () => {
  console.log(`Listening on Port: ${port}`);
});
