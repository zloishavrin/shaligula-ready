const { Schema, model } = require('mongoose');

const Test = new Schema({
    name: {type: String, unique: true, required: true},
    img_path: {type: String, required: true}
});

module.exports = model('Test', Test);