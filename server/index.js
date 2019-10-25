require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');

const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();
app.use(express.json());

// Connects Server to Heroku //
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('DB Connected')
})

// If we use Cookies we will write that here //

// Endpoints //
app.post('/auth/login', ctrl.login);
app.post('/auth/register', ctrl.register);
// app.post('/auth/logout', ctrl.logout);
// app.post('/auth/user', ctrl.getUser);



const port = SERVER_PORT;
app.listen(port, () => console.log(`Magic on port: ${port}`));