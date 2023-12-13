const {Schema, model} = require('mongoose');

const TaskSchema = new Schema({
    title: String,
    description: String
});

module.exports = model('Task', TaskSchema);