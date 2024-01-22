const { Schema, model } = require('mongoose');

const Quest = new Schema({
    test: {type: Schema.Types.ObjectId, ref: 'Test'},
    text: {type: String, required: true},
    variable: {type: [String], required: true},
    true: {type: Number, required: true}
});

module.exports = model('Quest', Quest);