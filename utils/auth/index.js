const passport = require('passport');

// Aquí van listadas todas las estrategias
const LocalStrategy = require('./strategies/local.strategy');

passport.use(LocalStrategy);
