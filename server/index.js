require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const bodyParser = require('body-parser');
const massive = require('massive');
var nodemailer = require('nodemailer');

const app = express();
const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING,
    MY_EMAIL,
    PASSWORD
} = process.env;

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))
//--- AUTHENTICATION START ---//
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function(accessToken, refreshToken, extraParams, profile, done){
    const db = app.get('db');
    const {id, displayName, picture} = profile;
    db.find_user([id]).then(users => {
        if(users[0]){
            return done(null, users[0].id)
        } else {
            db.create_user([displayName, picture, id]).then(createdUser => {
                return done(null, createdUser[0].id)
            })
        }
    })
}))

passport.serializeUser((id, done) => {
    done(null,id)
})
passport.deserializeUser((id, done) => {
    app.get('db').find_session_user([id]).then(user => {
        done(null,user[0]);
    })
})

app.get('/auth', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/',
    failureRedirect: 'http://localhost:4000'
}))

app.get('/auth/me', function(req, res) {
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(200).send(null)
    }
})

app.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('http://localhost:3000/#/')
})
//--- AUTHENTICATION END ---//

//--- ENDPOINTS START---//
app.get('/getAllProducts', function(req,res){
    let db = req.app.get('db');
    db.getAllProducts()
    .then((products) => {
        res.status(200).send(products)
    })
    .catch(() => res.status(500).send())
})
//--- ENDPOINTS END ---//
//--- NODEMAILER START---//
app.post('/api/sendEmail', (req, res) => {
    nodemailer.createTestAccount((err,account) => {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MY_EMAIL,
                pass: process.env.PASSWORD
            }
        });
        let mailOptions = {
            from: req.query.email,
            to: process.env.MY_EMAIL,
            subject: req.query.subject,
            text: req.query.message
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                return console.log(error);
            }
            res.send(mailOptions)
        });
    })
})
//--- NODEMAILER END ---//

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));