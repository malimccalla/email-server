const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/keys');

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
