const express = require('express');
const app = express();


//Import routes
const authRoute = require('./routes/auth');


//Route Middlewares
app.use('/api/user', authRoute)


app.listen(8080, () => console.log('Server is Up'));