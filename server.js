/* eslint-disable no-undef */
'use strict';
console.log('server log');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());

mongoose.connect(
  process.env.DB_URL
).then(() => {
  console.log('Mongo DB is connected!');
}).catch(e => console.log('errrr',e));

const Cat = require('./models/cat.js');
const PORT = process.env.PORT || 5005;


app.get('/', (req,res) =>res.status(200).send('Hello from our Server!'));
app.get('/cats', getCats);


async function getCats(req,res){
  try {
    let results = await Cat.find();
    console.log('results',results);
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
