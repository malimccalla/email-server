const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/require_login');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    try {
      await stripe.charges.create({
        amount: 500,
        currency: 'USD',
        description: '$5 for 5 credits',
        source: req.body.id,
      });

      req.user.credits += 5;
      const user = await req.user.save();

      res.status(200).json(user);
    } catch (e) {
      console.log('ERROR:', e);
    }
  });
};
