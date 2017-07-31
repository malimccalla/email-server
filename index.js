const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./config/keys');

const app = express();

// GOOGLE

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Acess token', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);
    },
  ),
);

app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  }),
);

app.get('/auth/google/callback', passport.authenticate('google'));

// FACEBOOK

passport.use(
  new FacebookStrategy(
    {
      clientID: keys.facebookClientID,
      clientSecret: keys.facebookClientSecret,
      callbackURL: '/auth/facebook/callback',
      profileFields: [
        'email',
        'id',
        'displayName',
        'name',
        'gender',
        'age_range',
        'cover',
        'locale',
        'music',
        'picture',
      ],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Acess token', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile._json);
    },
  ),
);

app.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['public_profile', 'email', 'user_actions.music'],
  }),
);

app.get('/auth/facebook/callback', passport.authenticate('facebook'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
