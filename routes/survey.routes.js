const mongoose = require('mongoose');
const requireLogin = require('../middlewares/require_login');
const requireCredits = require('../middlewares/require_credits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/email_templates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};
