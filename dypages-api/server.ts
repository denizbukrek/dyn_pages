//Load environment variables
import dotenv from 'dotenv';
dotenv.load();
import { logger } from './helpers/logger';

//Include required packages
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import passport from 'passport';
import session from 'express-session';
import methodOverride from 'method-override';
import router from './routes/api';

logger.init();

var app = express();

// configure app
app.use(morgan('dev')); // log requests to the console

app.use(session({ secret: "************" }));

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// REGISTER OUR ROUTES -------------------------------

app.use(passport.initialize());
app.use(passport.session());

app.use('/api', router);

// START THE SERVER
// =============================================================================
var port = process.env.PORT || 3000; // set our port
app.listen(port);
console.log('Magic happens on port ' + port);
