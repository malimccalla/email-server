const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

passport.use(new GoogleStrategy());

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT);
