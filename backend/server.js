const express = require("express");
const bodyParser = require('body-parser');
// const dotenv = require("dotenv");
require('dotenv').config();
const mongoose = require("mongoose");

const session = require("express-session");
const MongoStore = require('connect-mongo');
const passport = require('passport');
require('./auth-google/oauth.js');
const logElement = require('./auth-google/loginElement.js')
const isLoggedIn = require('./middleware/isLoggedIn.js')

const port = process.env.PORT || 8080;
const SECT_SRECT = process.env.SECTION_SRECT
const CRY_SRECT = process.env.CRYPTO_SRECT
const app = express();

//Express-session
app.use(session({
  secret: `${SECT_SRECT}`,
  saveUninitialized: true, // create session until something stored
  resave: false, // dont save session if unmodified
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_API_KEY,
    crypto: {
      secret: `${CRY_SRECT}`
    }
  })
}));

app.use(passport.initialize());
app.use(passport.session());
// dotenv.config();
app.use(express.json());

app.get('/login', (req, res) => {
  res.send(`${logElement}`);
});

app.get('/auth/google',
 passport.authenticate('google', { scope:
     [ 'email', 'profile' ] }
));

app.get( '/google/callback',
   passport.authenticate( 'google', {
       successRedirect: '/api-docs',
       failureRedirect: '/google/failure'
}));

app.get('/google/failure', (req, res) => {
 res.send('Something went wrong with the authetication...');
});

// app.use(bodyParser.json())
//   .use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     next();
//   }).use('/', require('./routes'));

  app.use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', isLoggedIn, require('./routes')); // Middleware (isLoggedIn)

    // LogOut
    app.get('/logout',  (req, res) => {
      req.session.destroy();
      res.send('Goodbye! you have logout.');
      res.redirect('/');
  });

  mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_API_KEY, () => {
  console.log("Connected to MongoDB");
});

app.listen(port, () => {
  console.log("Backend is running.");
});