const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const BuildingSchema = new Schema({
    BuildingFullName: {
    type: String,
    required: [true, 'Name is required.']
   },
   BuildingName: String
  })

const Building = mongoose.model('Building', BuildingSchema);
module.exports = Building;