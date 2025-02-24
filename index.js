const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const User = require('./MEARN-lec/schema'); 
const initializepassport = require("./passportconfig");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/yourdbname', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

initializepassport(passport);
app.use(passport.initialize());

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(passport.session());

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/public/register.html');
});

app.post("/register", async (req, res) => {
    try {
        const newUser = new User({
            firstName: req.body.FirstName,
            lastName: req.body.LastName,
            email: req.body.Email,
            username: req.body.username,
            password: req.body.Password
        });

        await newUser.save();
        console.log("User registered successfully");
        res.send("User registered successfully");
    } catch (err) {
        console.error("Error Saving: " + err.message);
        res.status(500).send("Error Saving: " + err.message);
    }
});


// app.post('/login', 
//     passport.authenticate('local', { failureRedirect: '/login' }), 
//     (req, res) => {
//         res.redirect('/');
//     }
// );

app.get('/', (req, res) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login');
    }
    res.send(`Welcome ${req.user.username}`); 
});

app.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/login');
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
