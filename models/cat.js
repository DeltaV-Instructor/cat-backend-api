'use strict';

const mongoose = require('mongoose');
const { Schema } =  mongoose;

const catSchema = new Schema({
  name: {type: String, require: true},
  color:{type: String, require: true},
  spayNeuter:{type: Boolean, require: true},
  location:{type: String, require: true}
});

const CatModel = mongoose.model('Cat', catSchema);
module.exports = CatModel;
