const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

//Load env variables
dotenv.config({path: './config/config.env'});

//Connect to database
connectDB();

const app = express();

//Body Parser Middleware
app.use(express.json());

//Enable Cors
app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/v1/stores', require('./routes/stores'));

app.get('/api/v1/stores',(req,res)=> {
    res.send('Hello');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=> console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));