require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
var nodemailer = require('nodemailer');
const stripe = require('stripe')(process.env.S_STRIPE_KEY);
const cors = require('cors');

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
    PASSWORD,
    S_STRIPE_KEY,
    REACT_APP_STRIPE_KEY,
    REACT_APP_LOGIN,
    REACT_APP_LOGOUT,
    SUCCESSREDIRECT,
    FAILUREREDIRECT
} = process.env;
app.use(bodyParser.json());
app.use(cors())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})
app.use(express.static(__dirname + './../build'));
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
    successRedirect: SUCCESSREDIRECT,
    failureRedirect: FAILUREREDIRECT
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
    res.redirect(SUCCESSREDIRECT)
})
//--- AUTHENTICATION END ---//

//--- STRIPE START ---//
app.post('/api/charge', function(req, res){
    const db = app.get('db')
    console.log(req.body.amount)
    const charge = stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        description: 'Example charge',
        source: req.body.token.id
      })
      res.sendStatus(200) // clear out cart here
  })
  //--- STRIPE END---//

//--- ENDPOINTS START---//
//--- Products Endpoints ---//
app.get('/getAllProducts', function(req,res){
    let db = req.app.get('db');
    db.getAllProducts()
    .then((products) => {
        res.status(200).send(products)
    })
    .catch(() => res.status(500).send())
})
app.get('/api/product/:id', (req, res)=>{
    let db = req.app.get('db')
    db.products.findOne({id: req.params.id}).then(product=>{
        res.status(200).send(product)
    }).catch(err=>{
        console.error(err)
        res.status(500).send(err)
    })
})
//--- Cart Endpoints ---//
app.get('/api/cart', (req,res)=>{
    console.log('in get cart')
    let db = req.app.get('db')
    if(req.user){
        db.cart.get_cart(req.user.id).then(resp=>{
            console.log('cart----',resp)
            res.status(200).send(resp)
        }).catch(err=>{
            console.error(err)
            res.status(500).send(err)
        })
    } else {
        if (!req.session.cart){
            req.session.cart = []
        }
        res.status(200).send(req.session.cart)
    }
})
app.post('/api/cart', (req, res)=>{
    let db = req.app.get('db')
    console.log(req.body)
    let {productID, quantity} = req.body;
    if(req.user){
        db.cart.add_to_cart(req.user.id, productID, quantity).then(resp=>{
            res.status(200).send(resp)
        }).catch(err=>{
            console.error(err)
            res.status(500).send(err)
        })
    } else {
        if (!req.session.cart){
            req.session.cart = []
        }
        req.session.cart.push({prod_id: productID, quantity})
        res.sendStatus(200);
    }
})
app.put('/api/cart', (req, res)=>{
    let db = req.app.get('db')
    let {cartID, newQuantity} = req.body;
    db.cart.change_quantity(cartID, newQuantity).then(resp=>{
        res.status(200).send(resp)
    }).catch(err=>{
        console.error(err)
        res.status(500).send(err)
    })
})
app.delete('/api/cart/:id', (req, res)=>{
    let db = req.app.get('db')
    db.cart.remove_from_cart(req.params.id).then(resp=>{
        res.status(200).send()
    }).catch(err=>{
        console.error(err)
        res.status(500).send(err)
    })
})
//--- Order Endpoints ---//
// app.post('/api/order', (req,res)=>{
//     let db = req.app.get('db')
//     console.log(req.user.id)
//     db.cart.get_cart(req.user.id).then(cart_items=>{
//         console.log('products', products)
//         db.orders.new_order(req.user.id).then(new_order=>{
//             new_order = new_order[0]
//             console.log('new_order',new_order)
//             let orderStack = []
//             cart_items.forEach(item=>{
//                 console.log('item',JSON.stringify(item))
//                 orderStack.push(db.orders.add_order_item(new_order.id, item.id, item.quantity, item.price))
//             })
//             Promise.all(orderStack).then(resp=>{
//                 db.cart.empty_cart(req.user.id)
//                 res.status(200).send('Order placed')
//             }).catch(err=>{
//                 console.error(err)
//                 res.status(500).send(err)
//             })
//         }).catch(err=>{
//             console.error(err)
//             res.status(500).send(err)
//         })
//     }).catch(err=>{
//         console.error(err)
//         res.status(500).send(err)
//     })
// })

// app.get('/api/user/orders', (req, res)=>{
//     let db = req.app.get('db')
//     if(req.user){
//         db.orders.get_user_orders(req.user.id).then(orders=>{
//             let obj = _.groupBy(orders, 'order_id')
//             let output = []
//             for (let key in obj){
//                 output.push(utils.consolidate(obj[key], 'items', 'order_id,order_ts,fulfilled,user_id'))
//             }
//             res.status(200).send(output);
//         }).catch(err=>{
//             console.error(err)
//             res.status(500).send(err)
//         })
//     } else {
//         res.status(200).send([])
//     }
// })

// app.get('/api/user/order/:id', (req, res)=>{
//     let db = req.app.get('db')

//     db.orders.get_user_order(req.params.id).then(order=>{
//         order = utils.consolidate(order, 'items', 'order_ts,fulfilled,order_id,user_id')
//         console.log('order: ', order)
//         res.status(200).send(order)
//     }).catch(err=>{
//         console.error(err)
//         res.status(500).send(err)
//     })
// })
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
//--- STRIPE START ---//

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`));