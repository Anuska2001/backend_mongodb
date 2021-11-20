const mongoose = require('mongoose')
const {Schema} = mongoose

const dataSchema = new Schema({
    name: String,
    reg_no: Number,
    marks: Number
});

module.exports = mongoose.model('data', dataSchema, 'dataSchema');