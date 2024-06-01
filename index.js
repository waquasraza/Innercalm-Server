const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');

dotenv.config()
const app = express();
const PORT = process.env.PORT || 5050

const dbConnection = require('./config/db');
const userRoute = require('./routes/user');

// app middlewares
app.use(express.json());
app.use(morgan('dev'));

// db connection
dbConnection();

app.get('/', (req,res)=>{
    res.status(200).json({success: true, message: 'Hello World.'})
})

// user route
app.use('/api/v1/users/', userRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT: ${PORT}`)
})