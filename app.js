const express = require('express');
const routes= require('./Routers/routes')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

app.use(express.json()) //it cannot read property that we send json data so we have tell express that we are sending json data

//connected to mongodb
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true,useUnifiedTopology:true},()=>{console.log("connected to mongodb")});

app.use('/alien',routes);

app.listen(3000,()=>{console.log("Connected to port no 3000")})