'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Cat = require('./models/cat');



async function seed(){
  await mongoose.connect(
    process.env.DB_URL
  ).then(() =>console.log('Mongo DB is connected!')).catch(e=>console.log(e));

  await Cat.create({
    name: 'Tony the tiger',
    color: 'Black and White and Orange',
    spayNeuter: false,
    location: 'Seattle'
  });
  console.log('Tony the Tiger!!');
  await Cat.create({
    name: 'Garfield',
    color: 'Orange',
    spayNeuter: true,
    location: 'Indiana'
  });
  console.log('Garfield');
  await Cat.create({
    name: 'Pink Panther',
    color: 'Hot Pink and Pink',
    spayNeuter: false,
    location: 'World Wide West Side'
  });
  console.log('Pink panther was added.');

  console.log('Closing the DB connection for our seed file');
  mongoose.disconnect();
}

seed();
