const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Val = new Schema({
    Suelo: String,
    Temperatura: String,
    Humedad: String,
    Fecha: date

});
module.exports = mongoose.model('iot', val);