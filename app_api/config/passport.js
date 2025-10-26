const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');
const Users = require('../models/user');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
    },
    async (email, password, done) => {
        const q = await Users.findOne({ email: username }).exec();
        if (!q) {
            return done(null, false, { message: 'Incorrect username.' });
        }
        if (!q.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }   
        return done(null, q);
    }
));
