/* eslint-disable no-undef */
'use strict';
console.log('server log');
//requires
require('dotenv').config();
const express = require('express');
const cors = require('cors');
//add mongoose
const mongoose = require('mongoose');

//use statements
const app = express();
//middlewear
app.use(cors());

//Make sure we can connect to our DB
//Add the actual connect call to mongo using mongoose!
// mongoose.connect(process.env.DB_URL);
mongoose.connect(
  process.env.DB_URL
).then(() => {
  console.log('Mongo DB is connected!');
}).catch(e => console.log('errrr',e));


//we shoulds create models folder and a file for our model and schema for cats
const Cat = require('./models/cat.js');




const PORT = process.env.PORT || 5005;



















//routes
app.get('/', (req,res) =>{
  res.status(200).send('Hello from our Server!');
});


app.get('/cats', getCats);


async function getCats(req,res){
  console.log('made it');
  try {
    let results = await Cat.find();
    res.status(200).send(results);
  } catch (error) {
    next(error);
  }

}







//star do?
app.get('*', (request, response) => {
  response.status(404).send('Not available');
});

// ERROR
// eslint-disable-next-line no-unused-vars
app.use((error, request, res, next) => {
  res.status(500).send(error.message);
});
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
