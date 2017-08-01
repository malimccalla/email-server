const express = require('express');
require('./services/passport');
require('./routes/auth.routes');

const app = express();

require('./routes/auth.routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
