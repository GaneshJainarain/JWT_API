const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


dotenv.config();

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log('Connected to DB!'));

//Import routes
const authRoute = require('./routes/auth');

//Middlewares
app.use(express)



//Route Middlewares
app.use('/api/user', authRoute)


app.listen(8080, () => console.log('Server is Up'));