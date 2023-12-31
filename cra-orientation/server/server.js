const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const sessionMiddleware = require('./modules/session-middleware.js');
const passport = require('./strategies/user.strategies');

// My Routes
const questionRouter = require('./routes/questions.route')
const userRouter = require('./routes/user.route');


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/questions', questionRouter);
app.use('/api/user', userRouter);


// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 8000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});