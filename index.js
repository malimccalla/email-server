const express = require('express');
require('./services/passport');
const authRoutes = require('./routes/auth.routes');

const app = express();
authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
