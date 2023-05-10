const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const Handlebars = require('handlebars');
const routes = require('./controllers/');

Handlebars.registerHelper('animateMemoMates', helpers.animateMemoMates);

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

// creates a new sequelize store by using the express session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// configures and links the session object with the sequelize store
const sess = {
    secret: 'Unique crew one',
    cookie: {
      maxAge: 300000,
      httpOnly: true,
      secure: false,
      sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };


// adds to the express session and stores it as express middleware
app.use(session(sess));
  
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});